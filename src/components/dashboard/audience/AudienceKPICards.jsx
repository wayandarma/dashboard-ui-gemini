import React from 'react';
import PropTypes from 'prop-types';
import { Users, Activity, Clock, MousePointerClick, TrendingUp, TrendingDown } from 'lucide-react';
import './AudienceKPICards.css';

const IconMap = {
    Users,
    Activity,
    Clock,
    MousePointerClick
};

/**
 * AudienceKPICards Component
 * @description Displays 4 KPI cards for the Audience page in a responsive grid.
 * @param {Object[]} data - Array of KPI objects
 * @param {boolean} isLoading - Loading state for skeletons
 */
export default function AudienceKPICards({ data, isLoading }) {
    if (isLoading || !data) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="card">
                        <div className="kpi-header">
                            <div className="skeleton kpi-skeleton-label"></div>
                            <div className="skeleton kpi-skeleton-icon"></div>
                        </div>
                        <div className="kpi-value-row">
                            <div className="skeleton kpi-skeleton-value"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((kpi, index) => {
                const isBounceRate = kpi.id === "bounce_rate";
                const isNegativeDelta = kpi.delta < 0;

                // Logic for Delta Badge colors
                let isGoodTrend = true;
                if (isBounceRate) {
                    isGoodTrend = isNegativeDelta;
                } else {
                    isGoodTrend = !isNegativeDelta;
                }

                const deltaBadgeClass = `badge ${isGoodTrend ? 'badge-success' : 'badge-danger'}`;
                const DeltaIcon = isNegativeDelta ? TrendingDown : TrendingUp;
                const IconComponent = IconMap[kpi.icon] || Users;

                return (
                    <div
                        key={kpi.id}
                        className={`card kpi-card delay-${Math.min(index, 3)}`}
                    >
                        <div className="kpi-header">
                            <span className="kpi-label">{kpi.label}</span>
                            <div className="kpi-icon-wrapper">
                                <IconComponent size={18} strokeWidth={2} />
                            </div>
                        </div>
                        <div className="kpi-value-row">
                            <div className="kpi-value">
                                {kpi.value}
                                {kpi.suffix || ""}
                            </div>
                            <div className={deltaBadgeClass}>
                                <DeltaIcon size={14} strokeWidth={2.5} />
                                <span>{Math.abs(kpi.delta)}%</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

AudienceKPICards.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            delta: PropTypes.number.isRequired,
            icon: PropTypes.string.isRequired,
            suffix: PropTypes.string
        })
    ),
    isLoading: PropTypes.bool
};
