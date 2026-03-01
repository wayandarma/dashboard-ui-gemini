import React from 'react';
import PropTypes from 'prop-types';

/**
 * AudienceGeographyTable Component
 * @description Styled table displaying top 10 countries by audience share.
 * @param {Object[]} data - Array of geography data
 * @param {boolean} isLoading - Loading state for skeleton rows
 */
export default function AudienceGeographyTable({ data, isLoading }) {
    const renderSkeletons = () => {
        return Array.from({ length: 10 }).map((_, i) => (
            <tr key={`skeleton-${i}`}>
                <td className="w-12"><div className="skeleton h-4 w-4"></div></td>
                <td>
                    <div className="flex items-center gap-2">
                        <div className="skeleton h-4 w-6 rounded-sm"></div>
                        <div className="skeleton h-4 w-24"></div>
                    </div>
                </td>
                <td><div className="skeleton h-4 w-16"></div></td>
                <td className="w-48">
                    <div className="flex items-center gap-3">
                        <div className="skeleton h-4 w-8"></div>
                        <div className="skeleton h-2 w-20"></div>
                    </div>
                </td>
                <td><div className="skeleton h-4 w-16"></div></td>
                <td><div className="skeleton h-4 w-12"></div></td>
            </tr>
        ));
    };

    return (
        <div className="card w-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-lg font-semibold text-primary">Top Geographies</h3>
            </div>

            <div className="table-scroll-container data-table-container">
                <table className="data-table w-full">
                    <thead>
                        <tr>
                            <th className="w-12 text-center">#</th>
                            <th>Country</th>
                            <th className="text-right">Users</th>
                            <th className="w-48">Share %</th>
                            <th className="text-right">Avg. Session</th>
                            <th className="text-right">Bounce Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading || !data ? renderSkeletons() : data.map((item, index) => (
                            <tr key={item.country}>
                                <td className="text-center font-mono text-muted">{index + 1}</td>
                                <td className="font-medium flex items-center gap-2">
                                    <span className="text-lg leading-none" aria-hidden="true">{item.flag}</span>
                                    {item.country}
                                </td>
                                <td className="text-right font-mono">{item.users.toLocaleString()}</td>
                                <td className="w-48">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="font-mono">{item.percentage}%</span>
                                        <div className="flex-grow h-1.5 bg-[var(--color-bg-overlay)] rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    width: `${item.percentage}%`,
                                                    backgroundColor: 'var(--color-accent-primary)',
                                                    opacity: 0.6
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right font-mono text-muted">{item.sessionDuration}</td>
                                <td className="text-right font-mono text-muted">{item.bounceRate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

AudienceGeographyTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            country: PropTypes.string.isRequired,
            flag: PropTypes.string.isRequired,
            users: PropTypes.number.isRequired,
            percentage: PropTypes.number.isRequired,
            sessionDuration: PropTypes.string.isRequired,
            bounceRate: PropTypes.string.isRequired
        })
    ),
    isLoading: PropTypes.bool
};
