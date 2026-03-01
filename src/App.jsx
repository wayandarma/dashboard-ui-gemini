import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import KPICards from './components/dashboard/KPICards';
import RevenueChart from './components/dashboard/RevenueChart';
import TrafficChart from './components/dashboard/TrafficChart';
import ConversionDonut from './components/dashboard/ConversionDonut';
import CampaignTable from './components/dashboard/CampaignTable';
import ActivityFeed from './components/dashboard/ActivityFeed';
import Audience from './pages/Audience';

function App() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <BrowserRouter>
            <div className="dashboard-layout">
                {/* Sidebar - Handles its own responsive styling */}
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

                {/* Main Content Area */}
                <div className="main-content">
                    <Topbar />

                    <main className="page-content pb-24 md:pb-6">
                        <Routes>
                            <Route path="/" element={
                                <>
                                    {/* Section 1: KPI Cards */}
                                    <KPICards />

                                    {/* Section 2: Area Chart */}
                                    <section className="mt-2 text-primary">
                                        <RevenueChart />
                                    </section>

                                    {/* Section 3: Two-Column Row */}
                                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
                                        <TrafficChart />
                                        <ConversionDonut />
                                    </section>

                                    {/* Section 4 & 5: Table & Activity Feed */}
                                    <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-2">
                                        <div className="xl:col-span-2">
                                            <CampaignTable />
                                        </div>
                                        <div className="xl:col-span-1">
                                            <ActivityFeed />
                                        </div>
                                    </section>
                                </>
                            } />
                            <Route path="/audience" element={<Audience />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </main>
                </div>

                {/* Mobile Bottom Navigation Component if needed (omitted for brevity, layout handles it) */}
            </div>
        </BrowserRouter>
    );
}

export default App;
