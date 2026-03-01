import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AudienceDemographicsChart.css';

/**
 * AudienceDemographicsChart Component
 * @description Custom horizontal bar chart for age group demographics
 * @param {Object[]} data - Array of demographics data
 * @param {boolean} isLoading - Loading state for skeleton
 */
export default function AudienceDemographicsChart({ data, isLoading }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            // Trigger animation on mount after a tiny delay for React to flush DOM
            const timer = setTimeout(() => setAnimate(true), 50);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    const colors = [
        'var(--color-accent-primary)',
        'var(--color-accent-secondary)',
        'var(--color-accent-tertiary)',
        'var(--color-success)',
        'var(--color-warning)'
    ];

    if (isLoading || !data) {
        return (
            <div className="card h-full">
                <h3 className="font-display text-lg font-semibold text-primary mb-6">Age Demographics</h3>
                <div className="flex flex-col gap-4">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="skeleton h-4 w-12"></div>
                            <div className="skeleton h-2 flex-grow"></div>
                            <div className="skeleton h-4 w-8"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="card h-full">
            <h3 className="font-display text-lg font-semibold text-primary mb-6">Age Demographics</h3>
            <div className="flex flex-col">
                {data.map((item, index) => {
                    const color = colors[index % colors.length];
                    const delay = index * 80;

                    return (
                        <div key={item.ageGroup} className="demo-bar-container">
                            <div className="demo-label">{item.ageGroup}</div>
                            <div className="demo-track">
                                <div
                                    className="demo-fill"
                                    style={{
                                        backgroundColor: color,
                                        width: animate ? `${item.percentage}%` : '0%',
                                        transitionDelay: `${delay}ms`
                                    }}
                                    title={`${item.percentage}%`}
                                ></div>
                            </div>
                            <div className="demo-percent">{item.percentage}%</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

AudienceDemographicsChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            ageGroup: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired
        })
    ),
    isLoading: PropTypes.bool
};
