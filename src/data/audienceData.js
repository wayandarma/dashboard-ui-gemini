/**
 * @file /src/data/audienceData.js
 * @description Mock data for the Audience Dashboard page including KPIs, growth trends,
 * demographics, geography, and segments data.
 */

// --- KPIs Data ---
export const audienceKPIs = [
    {
        id: "total_audience",
        label: "Total Audience",
        value: "84,320",
        delta: 18.4,
        icon: "Users",
    },
    {
        id: "active_users",
        label: "Active Users (last 30d)",
        value: "31,540",
        delta: 11.2,
        icon: "Activity",
    },
    {
        id: "avg_session",
        label: "Avg. Session Duration",
        value: "4m 32s",
        delta: 6.7,
        icon: "Clock",
    },
    {
        id: "bounce_rate",
        label: "Bounce Rate",
        value: "38.5",
        delta: -4.1,
        icon: "MousePointerClick",
        suffix: "%",
    },
];

// --- Growth Data (Last 30 Days) ---
// Generated programmatically for a realistic 30-day trend.
const generateGrowthData = () => {
    const data = [];
    const startDay = 1;
    const month = "Feb";
    for (let i = 0; i < 30; i++) {
        // Determine realistic variations and weekend dips
        const day = (startDay + i) % 31 || 31;
        const isWeekend = (i % 7) === 5 || (i % 7) === 6; // Rough approximation

        // Base traffic
        const baseNew = isWeekend ? 300 : 500;
        const baseReturning = isWeekend ? 600 : 1200;

        // Add random variance
        const newUsers = Math.floor(baseNew + (Math.random() * 300 - 100) + (i * 5));
        const returningUsers = Math.floor(baseReturning + (Math.random() * 600 - 200) + (i * 15));

        // Calculate total with small random offset for realism (representing untracked/anonymous sessions)
        const randomOffset = Math.floor(Math.random() * 50);
        const totalSessions = newUsers + returningUsers + randomOffset;

        data.push({
            date: `${month} ${day.toString().padStart(2, "0")}`,
            newUsers,
            returningUsers,
            totalSessions,
        });
    }
    return data;
};

export const audienceGrowthData = generateGrowthData();

// --- Demographics Data ---
export const demographicsData = [
    { ageGroup: "18–24", percentage: 25, count: 21080 },
    { ageGroup: "25–34", percentage: 35, count: 29512 },
    { ageGroup: "35–44", percentage: 20, count: 16864 },
    { ageGroup: "45–54", percentage: 12, count: 10118 },
    { ageGroup: "55+", percentage: 8, count: 6746 },
];

// --- Geography Data ---
export const geographyData = [
    { country: "Indonesia", flag: "🇮🇩", users: 26400, percentage: 31.3, sessionDuration: "5m 12s", bounceRate: "32.1%" },
    { country: "United States", flag: "🇺🇸", users: 18200, percentage: 21.6, sessionDuration: "4m 45s", bounceRate: "36.4%" },
    { country: "India", flag: "🇮🇳", users: 9400, percentage: 11.1, sessionDuration: "3m 50s", bounceRate: "41.2%" },
    { country: "United Kingdom", flag: "🇬🇧", users: 7800, percentage: 9.2, sessionDuration: "4m 10s", bounceRate: "34.8%" },
    { country: "Australia", flag: "🇦🇺", users: 6200, percentage: 7.4, sessionDuration: "5m 05s", bounceRate: "31.5%" },
    { country: "Germany", flag: "🇩🇪", users: 4500, percentage: 5.3, sessionDuration: "4m 20s", bounceRate: "38.0%" },
    { country: "Singapore", flag: "🇸🇬", users: 3800, percentage: 4.5, sessionDuration: "6m 15s", bounceRate: "28.5%" },
    { country: "Canada", flag: "🇨🇦", users: 3100, percentage: 3.7, sessionDuration: "4m 30s", bounceRate: "35.6%" },
    { country: "Philippines", flag: "🇵🇭", users: 2800, percentage: 3.3, sessionDuration: "4m 05s", bounceRate: "39.2%" },
    { country: "Malaysia", flag: "🇲🇾", users: 2120, percentage: 2.5, sessionDuration: "4m 55s", bounceRate: "33.7%" },
];

// --- Segments Data ---
export const segmentsData = [
    { name: "New Visitors", value: 20, color: "var(--color-accent-primary)" },
    { name: "Returning", value: 45, color: "var(--color-accent-secondary)" },
    { name: "Loyal (5+ visits)", value: 15, color: "var(--color-accent-tertiary)" },
    { name: "At-Risk", value: 12, color: "var(--color-warning)" },
    { name: "Dormant", value: 8, color: "var(--color-danger)" },
];
