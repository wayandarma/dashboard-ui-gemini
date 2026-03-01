import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

/**
 * AudienceSegmentsChart Component
 * @description Donut chart showing audience segment distribution
 * @param {Object[]} data - Array of segments data
 * @param {boolean} isLoading - Loading state for skeleton
 */
export default function AudienceSegmentsChart({ data, isLoading }) {
    const [useAnimation, setUseAnimation] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setUseAnimation(!mediaQuery.matches);

        const listener = (e) => setUseAnimation(!e.matches);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, []);

    if (isLoading || !data) {
        return (
            <div className="card h-full flex flex-col">
                <h3 className="font-display text-lg font-semibold text-primary mb-6">Audience Segments</h3>
                <div className="flex-grow flex items-center justify-center">
                    <div className="skeleton rounded-full" style={{ width: '220px', height: '220px' }}></div>
                </div>
            </div>
        );
    }

    const animationProps = useAnimation ? {
        animationBegin: 0,
        animationDuration: 700
    } : {
        animationDuration: 0
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, value, payload: itemPayload } = payload[0];
            return (
                <div
                    className="p-3 rounded-md shadow-lg"
                    style={{
                        backgroundColor: 'var(--color-bg-overlay)',
                        border: '1px solid var(--color-border-default)',
                        borderRadius: 'var(--radius-md)'
                    }}
                >
                    <div className="flex items-center gap-2 mb-1">
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: itemPayload.color }}
                        ></span>
                        <span className="text-xs font-medium text-primary">{name}</span>
                    </div>
                    <div className="flex justify-between gap-4 text-xs font-mono ml-4 text-secondary">
                        <span>Share:</span>
                        <span>{value}%</span>
                    </div>
                </div>
            );
        }
        return null;
    };

    const renderLegend = () => (
        <div className="flex flex-col gap-3 justify-center pl-6 border-l border-[var(--color-border-subtle)]">
            {data.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center gap-3">
                    <span
                        className="w-3 h-3 rounded-sm flex-shrink-0"
                        style={{ backgroundColor: entry.color }}
                    ></span>
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-secondary">{entry.name}</span>
                        <span className="text-sm font-mono text-primary font-medium">{entry.value}%</span>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="card h-full">
            <h3 className="font-display text-lg font-semibold text-primary mb-6">Audience Segments</h3>
            <div className="flex h-[240px] items-center justify-between">
                <div className="w-[240px] h-[240px] relative flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={2}
                                dataKey="value"
                                stroke="none"
                                {...animationProps}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Custom Center Label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="font-mono text-2xl font-bold text-primary leading-tight">84,320</span>
                        <span className="text-xs tracking-wide uppercase text-secondary font-medium">Total Audience</span>
                    </div>
                </div>

                {renderLegend()}
            </div>
        </div>
    );
}

AudienceSegmentsChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired
        })
    ),
    isLoading: PropTypes.bool
};
