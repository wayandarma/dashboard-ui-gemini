// /src/data/mockData.js
// Purpose: Provides realistic dummy data for the dashboard components

export const kpiData = {
    revenue: { value: "$48,291", delta: "+12.4%", label: "Total Revenue", isPositive: true },
    conversions: { value: "3,847", delta: "+8.1%", label: "Total Conversions", isPositive: true },
    users: { value: "12,540", delta: "+22.7%", label: "New Users", isPositive: true },
    ctr: { value: "4.38%", delta: "-1.2%", label: "Avg. Click-Through Rate", isPositive: false }
};

export const revenueData = [
    { date: 'Oct 01', revenue: 1200, conversions: 110 },
    { date: 'Oct 05', revenue: 1500, conversions: 130 },
    { date: 'Oct 10', revenue: 2200, conversions: 180 },
    { date: 'Oct 15', revenue: 1800, conversions: 160 },
    { date: 'Oct 20', revenue: 2800, conversions: 240 },
    { date: 'Oct 25', revenue: 2400, conversions: 190 },
    { date: 'Oct 30', revenue: 3200, conversions: 290 },
];

export const trafficData = [
    { channel: 'Organic Search', visitors: 14500, color: 'var(--color-accent-primary)' },
    { channel: 'Paid Search', visitors: 11200, color: 'var(--color-accent-secondary)' },
    { channel: 'Social Media', visitors: 8900, color: 'var(--color-accent-tertiary)' },
    { channel: 'Email', visitors: 6500, color: 'var(--color-info)' },
    { channel: 'Direct', visitors: 4200, color: 'var(--color-warning)' },
    { channel: 'Referral', visitors: 2100, color: 'var(--color-success)' }
];

export const conversionDonutData = [
    { name: 'Email', value: 38, color: 'var(--color-accent-primary)' },
    { name: 'Social', value: 27, color: 'var(--color-accent-secondary)' },
    { name: 'Paid', value: 22, color: 'var(--color-accent-tertiary)' },
    { name: 'Organic', value: 13, color: 'var(--color-warning)' },
];

export const campaignTableData = [
    { id: 1, name: 'Holiday Special Q4', channel: 'Email', impressions: '124,500', clicks: '8,230', ctr: '6.61%', conversions: '412', revenue: '$18,450', status: 'Active' },
    { id: 2, name: 'Retargeting Winter', channel: 'Paid Search', impressions: '84,200', clicks: '4,100', ctr: '4.87%', conversions: '245', revenue: '$9,200', status: 'Active' },
    { id: 3, name: 'Brand Awareness', channel: 'Social Media', impressions: '210,000', clicks: '5,600', ctr: '2.67%', conversions: '120', revenue: '$4,500', status: 'Active' },
    { id: 4, name: 'Newsletter Weekly', channel: 'Email', impressions: '45,000', clicks: '3,800', ctr: '8.44%', conversions: '180', revenue: '$6,100', status: 'Paused' },
    { id: 5, name: 'Black Friday Teaser', channel: 'Paid Search', impressions: '150,000', clicks: '9,500', ctr: '6.33%', conversions: '890', revenue: '$35,600', status: 'Ended' },
    { id: 6, name: 'Influencer Collab', channel: 'Social Media', impressions: '89,000', clicks: '4,200', ctr: '4.72%', conversions: '150', revenue: '$5,250', status: 'Active' },
    { id: 7, name: 'SEO Optimization', channel: 'Organic Search', impressions: '—', clicks: '14,000', ctr: '—', conversions: '620', revenue: '$12,400', status: 'Active' },
    { id: 8, name: 'Abandoned Cart', channel: 'Email', impressions: '12,500', clicks: '2,100', ctr: '16.8%', conversions: '310', revenue: '$15,500', status: 'Active' },
];

export const activityFeedData = [
    { id: 1, type: 'conversion', description: 'New enterprise conversion ($4,500)', time: '2 min ago' },
    { id: 2, type: 'campaign', description: 'Campaign "Holiday Special" launched', time: '1 hr ago' },
    { id: 3, type: 'alert', description: 'Budget limit reached for "Social Retargeting"', time: '3 hrs ago' },
    { id: 4, type: 'milestone', description: 'New user milestone: 10,000 active users', time: '5 hrs ago' },
    { id: 5, type: 'conversion', description: 'Q3 Subscription renewal ($1,200)', time: '1 day ago' },
    { id: 6, type: 'campaign', description: 'Keyword adjustments applied to "Paid Search"', time: '1 day ago' },
];
