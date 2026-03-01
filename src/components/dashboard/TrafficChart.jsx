import React, { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { trafficData } from '../../data/mockData';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-[var(--color-bg-overlay)] border border-[var(--color-border-subtle)] p-3 rounded-md shadow-lg">
                <p className="font-display font-medium text-primary text-sm mb-1">{data.channel}</p>
                <p className="font-mono font-semibold text-primary">
                    <span className="text-secondary font-body font-normal text-xs mr-2">Visitors:</span>
                    {payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

export default function TrafficChart() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="card h-full min-h-[350px] flex flex-col delay-6 animate-fade-in-up">
            <h3 className="font-display font-semibold text-base text-primary mb-4">Traffic by Channel</h3>

            <div className="flex-grow w-full h-[250px]">
                {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={trafficData}
                            layout="vertical"
                            margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--color-border-subtle)" />
                            <XAxis
                                type="number"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
                                tickFormatter={(val) => `${val / 1000}k`}
                            />
                            <YAxis
                                type="category"
                                dataKey="channel"
                                axisLine={false}
                                tickLine={false}
                                width={100}
                                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12, fontFamily: 'var(--font-body)' }}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />

                            <Bar
                                dataKey="visitors"
                                radius={[0, 4, 4, 0]}
                                barSize={20}
                                animationDuration={600}
                                animationEasing="ease-out"
                                isAnimationActive={true}
                            >
                                {trafficData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}
