import React, { useState, useEffect } from 'react';
import { kpiData } from '../../data/mockData';
import { DownloadCloud, MousePointerClick, TrendingUp, Users } from 'lucide-react';

const iconMap = {
    revenue: TrendingUp,
    conversions: DownloadCloud,
    users: Users,
    ctr: MousePointerClick,
};

export default function KPICards() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const dataKeys = Object.keys(kpiData);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {dataKeys.map((key, index) => {
                const item = kpiData[key];
                const Icon = iconMap[key];

                if (loading) {
                    return (
                        <div key={`skeleton-${index}`} className="card h-32 flex flex-col justify-between delay-0 animate-fade-in-up">
                            <div className="flex justify-between items-start w-full">
                                <div className="skeleton w-24 h-4 rounded"></div>
                                <div className="skeleton w-6 h-6 rounded-full"></div>
                            </div>
                            <div className="mt-4">
                                <div className="skeleton w-1/2 h-8 rounded mb-2"></div>
                                <div className="skeleton w-16 h-4 rounded-full"></div>
                            </div>
                        </div>
                    );
                }

                return (
                    <div
                        key={key}
                        className={`card flex flex-col justify-between delay-${index + 1} animate-fade-in-up`}
                    >
                        <div className="flex justify-between items-start w-full mb-1">
                            <span className="uppercase text-xs tracking-widest text-secondary font-medium">
                                {item.label}
                            </span>
                            <Icon size={18} className="text-muted" />
                        </div>

                        <div className="mt-2">
                            <div className="font-mono text-3xl font-bold text-primary mb-1">
                                {item.value}
                            </div>
                            <div className="flex items-center gap-1">
                                <span className={`badge ${item.isPositive ? 'badge-success' : 'badge-danger'}`}>
                                    {item.isPositive ? '↑' : '↓'} {item.delta.replace(/[+-]/g, '')}
                                </span>
                                <span className="text-xs text-muted ml-1">vs last period</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
