import React from 'react';
import { activityFeedData } from '../../data/mockData';
import { MousePointerClick, Megaphone, AlertCircle, Award } from 'lucide-react';

const getIcon = (type) => {
    switch (type) {
        case 'conversion': return <MousePointerClick size={16} className="text-[var(--color-success)]" />;
        case 'campaign': return <Megaphone size={16} className="text-[var(--color-accent-primary)]" />;
        case 'alert': return <AlertCircle size={16} className="text-[var(--color-danger)]" />;
        case 'milestone': return <Award size={16} className="text-[var(--color-warning)]" />;
        default: return <span className="w-2 h-2 rounded-full bg-[var(--color-text-muted)]" />;
    }
};

const getBgColor = (type) => {
    switch (type) {
        case 'conversion': return 'bg-[rgba(34,197,94,0.1)] border-[rgba(34,197,94,0.2)]';
        case 'campaign': return 'bg-[rgba(61,142,240,0.1)] border-[rgba(61,142,240,0.2)]';
        case 'alert': return 'bg-[rgba(239,68,68,0.1)] border-[rgba(239,68,68,0.2)]';
        case 'milestone': return 'bg-[rgba(245,158,11,0.1)] border-[rgba(245,158,11,0.2)]';
        default: return 'bg-[var(--color-bg-elevated)] border-[var(--color-border-subtle)]';
    }
};

export default function ActivityFeed() {
    return (
        <div className="card w-full h-full flex flex-col delay-7 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-semibold text-lg text-primary">Recent Activity</h3>
                <button className="text-sm font-medium text-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)] transition-colors">
                    View all
                </button>
            </div>

            <div className="flex-grow flex flex-col gap-4 relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-2 bottom-2 w-px bg-[var(--color-border-subtle)]" />

                {activityFeedData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative flex items-start gap-4 animate-fade-in-up delay-${(index % 8)}`}
                    >
                        {/* Timeline Icon */}
                        <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-solid shrink-0 mt-0.5 ${getBgColor(item.type)}`}>
                            {getIcon(item.type)}
                        </div>

                        {/* Content */}
                        <div className="flex-grow pt-1">
                            <p className="font-body text-sm font-medium text-primary leading-tight mb-1">
                                {item.description}
                            </p>
                            <p className="font-mono text-xs text-muted">
                                {item.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
