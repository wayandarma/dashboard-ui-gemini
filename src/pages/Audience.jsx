import React, { useState, useEffect } from 'react';
import AudienceKPICards from '../components/dashboard/audience/AudienceKPICards';
import AudienceGrowthChart from '../components/dashboard/audience/AudienceGrowthChart';
import AudienceDemographicsChart from '../components/dashboard/audience/AudienceDemographicsChart';
import AudienceSegmentsChart from '../components/dashboard/audience/AudienceSegmentsChart';
import AudienceGeographyTable from '../components/dashboard/audience/AudienceGeographyTable';

import {
    audienceKPIs,
    audienceGrowthData,
    demographicsData,
    geographyData,
    segmentsData
} from '../data/audienceData';

/**
 * Audience Page
 * @description Main composition layout for the Audience Analytics Dashboard
 */
export default function Audience() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate network request
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col gap-6 w-full max-w-[1440px] mx-auto">
            {/* Page Header */}
            <div className="flex flex-col gap-2 mb-2">
                <h1 className="font-display text-3xl font-bold text-primary">Audience</h1>
                <p className="text-secondary">
                    Track and analyze your audience growth, demographics, and engagement.
                </p>
            </div>

            {/* KPI Cards (4 cols) */}
            <AudienceKPICards
                data={audienceKPIs}
                isLoading={isLoading}
            />

            {/* Growth Chart (full width) */}
            <AudienceGrowthChart
                data={audienceGrowthData}
                isLoading={isLoading}
            />

            {/* Two-column layout: Demographics & Segments */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AudienceDemographicsChart
                    data={demographicsData}
                    isLoading={isLoading}
                />
                <AudienceSegmentsChart
                    data={segmentsData}
                    isLoading={isLoading}
                />
            </div>

            {/* Geography Table (full width) */}
            <AudienceGeographyTable
                data={geographyData}
                isLoading={isLoading}
            />
        </div>
    );
}
