import React, { useState, useEffect } from 'react';
import {
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ComposedChart
} from 'recharts';
import { revenueData } from '../../data/mockData';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[var(--color-bg-overlay)] border border-[var(--color-border-subtle)] p-4 rounded-lg shadow-xl shadow-black/20">
                <p className="font-display font-medium text-primary text-sm mb-3">
                    {label}
                </p>
                {payload.map((entry, index) => (
                    <div key={index} className="flex flex-col gap-1 mb-2 last:mb-0">
                        <span className="text-xs text-secondary font-medium uppercase tracking-wide flex items-center gap-2">
                            <span
                                className="w-2 h-2 rounded-full inline-block"
                                style={{ backgroundColor: entry.color }}
                            />
                            {entry.name}
                        </span>
                        <span className="font-mono text-base font-semibold text-primary">
                            {entry.name === 'Revenue' ? `$${entry.value}` : entry.value}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default function RevenueChart() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="card w-full h-full min-h-[400px] flex flex-col delay-5 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="font-display font-semibold text-lg text-primary">Revenue & Conversions Over Time</h2>
                    <p className="text-sm text-secondary mt-1">Last 30 days performance</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[var(--color-accent-primary)]"></span>
                        <span className="text-xs text-secondary font-medium">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[var(--color-accent-secondary)]"></span>
                        <span className="text-xs text-secondary font-medium">Conversions</span>
                    </div>
                </div>
            </div>

            <div className="flex-grow w-full h-[300px]">
                {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={revenueData}
                            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--color-accent-primary)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="var(--color-accent-primary)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" />
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'var(--font-body)' }}
                                dy={10}
                            />
                            <YAxis
                                yAxisId="left"
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(val) => `$${val / 1000}k`}
                                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
                                dx={-10}
                            />
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
                                dx={10}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'var(--color-border-strong)', strokeWidth: 1, strokeDasharray: '4 4' }} />

                            <Area
                                yAxisId="left"
                                type="monotone"
                                dataKey="revenue"
                                name="Revenue"
                                stroke="var(--color-accent-primary)"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorRev)"
                                animationDuration={800}
                                animationEasing="ease-out"
                            />
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="conversions"
                                name="Conversions"
                                stroke="var(--color-accent-secondary)"
                                strokeWidth={3}
                                dot={{ r: 4, strokeWidth: 2, fill: 'var(--color-bg-base)' }}
                                activeDot={{ r: 6, strokeWidth: 0, fill: 'var(--color-accent-secondary)' }}
                                animationDuration={800}
                                animationEasing="ease-out"
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}
