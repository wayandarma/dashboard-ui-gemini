import React, { useState, useEffect } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from 'recharts';
import { conversionDonutData } from '../../data/mockData';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-[var(--color-bg-overlay)] border border-[var(--color-border-subtle)] p-3 rounded-md shadow-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}></div>
                <div>
                    <p className="font-display font-medium text-primary text-sm leading-tight">{data.name}</p>
                    <p className="font-mono font-semibold text-primary text-sm leading-tight">{data.value}%</p>
                </div>
            </div>
        );
    }
    return null;
};

export default function ConversionDonut() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const totalConversions = 3847; // From kpiData

    return (
        <div className="card h-full min-h-[350px] flex flex-col delay-7 animate-fade-in-up">
            <h3 className="font-display font-semibold text-base text-primary mb-2">Conversion by Campaign Type</h3>

            <div className="relative flex-grow w-full h-[220px] pt-4">
                {mounted && (
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={conversionDonutData}
                                cx="50%"
                                cy="50%"
                                innerRadius={65}
                                outerRadius={90}
                                paddingAngle={4}
                                dataKey="value"
                                stroke="none"
                                animationDuration={700}
                                animationEasing="ease-out"
                            >
                                {conversionDonutData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                )}

                {/* Center Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-4">
                    <span className="font-mono text-2xl font-bold text-primary">{totalConversions.toLocaleString()}</span>
                    <span className="text-[10px] uppercase tracking-widest text-secondary font-medium">Total</span>
                </div>
            </div>

            {/* Legend below */}
            <div className="mt-4 grid grid-cols-2 gap-y-3 px-2">
                {conversionDonutData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                            <span className="font-body text-xs text-secondary">{item.name}</span>
                        </div>
                        <span className="font-mono text-sm font-medium text-primary">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
