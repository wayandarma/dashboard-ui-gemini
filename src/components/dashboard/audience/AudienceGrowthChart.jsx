import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    ComposedChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

/**
 * AudienceGrowthChart Component
 * @description Displays dual-axis area and line charts for audience growth
 * @param {Object[]} data - Array of daily audience metrics
 * @param {boolean} isLoading - Loading state for skeleton
 */
export default function AudienceGrowthChart({ data, isLoading }) {
    const [useAnimation, setUseAnimation] = useState(true);

    useEffect(() => {
        // Check for user preference regarding animations
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setUseAnimation(!mediaQuery.matches);

        const listener = (e) => setUseAnimation(!e.matches);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, []);

    if (isLoading || !data) {
        return (
            <div className="card w-full flex flex-col gap-4">
                <div className="skeleton w-1/4 h-6 mb-2"></div>
                <div className="skeleton w-full" style={{ height: '320px' }}></div>
            </div>
        );
    }

    const animationProps = useAnimation ? {
        animationDuration: 800,
        animationEasing: 'ease-out'
    } : {
        animationDuration: 0
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="p-3 rounded-md shadow-lg"
                    style={{
                        backgroundColor: 'var(--color-bg-overlay)',
                        border: '1px solid var(--color-border-default)',
                        borderRadius: 'var(--radius-md)'
                    }}
                >
                    <p className="text-sm font-medium mb-2 text-primary">{label}</p>
                    {payload.map((entry, index) => (
                        <div key={index} className="flex justify-between gap-4 text-xs font-medium mb-1" style={{ color: entry.stroke || entry.color || 'var(--color-text-primary)' }}>
                            <span className="capitalize">{entry.name}:</span>
                            <span className="font-mono">{entry.value.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    const renderLegend = () => (
        <div className="flex justify-center items-center gap-6 mt-4 pb-2">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-accent-primary)' }}></span>
                <span className="text-secondary text-sm">New Users</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-accent-secondary)' }}></span>
                <span className="text-secondary text-sm">Returning Users</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-4 h-0 border-b-2 border-dashed" style={{ borderColor: 'var(--color-accent-tertiary)' }}></span>
                <span className="text-secondary text-sm">Total Sessions</span>
            </div>
        </div>
    );

    return (
        <div className="card w-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-lg font-semibold text-primary">Audience Growth (30d)</h3>
            </div>

            <div style={{ width: '100%', height: '320px' }}>
                <ResponsiveContainer>
                    <ComposedChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'var(--font-body)' }}
                            dy={10}
                            interval={4} // Show every 5th label approximately
                        />
                        <YAxis
                            yAxisId="left"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-bg-elevated)', opacity: 0.4 }} />

                        <Area
                            yAxisId="left"
                            type="monotone"
                            dataKey="newUsers"
                            name="New Users"
                            stroke="var(--color-accent-primary)"
                            fillOpacity={0.2}
                            fill="var(--color-accent-primary)"
                            strokeWidth={2}
                            {...animationProps}
                        />
                        <Area
                            yAxisId="left"
                            type="monotone"
                            dataKey="returningUsers"
                            name="Returning Users"
                            stroke="var(--color-accent-secondary)"
                            fillOpacity={0.2}
                            fill="var(--color-accent-secondary)"
                            strokeWidth={2}
                            {...animationProps}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="totalSessions"
                            name="Total Sessions"
                            stroke="var(--color-accent-tertiary)"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={false}
                            activeDot={{ r: 6, fill: 'var(--color-accent-tertiary)', stroke: 'var(--color-bg-surface)', strokeWidth: 2 }}
                            {...animationProps}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            {renderLegend()}
        </div>
    );
}

AudienceGrowthChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            newUsers: PropTypes.number.isRequired,
            returningUsers: PropTypes.number.isRequired,
            totalSessions: PropTypes.number.isRequired
        })
    ),
    isLoading: PropTypes.bool
};
