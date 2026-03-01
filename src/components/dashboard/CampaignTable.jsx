import React, { useState } from 'react';
import { campaignTableData } from '../../data/mockData';
import { ArrowUpDown, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

export default function CampaignTable() {
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        let sortableItems = [...campaignTableData];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                // Handle numeric sorting for strings with currency/percentages
                if (typeof aValue === 'string') {
                    const numA = parseFloat(aValue.replace(/[^0-9.-]+/g, ""));
                    const numB = parseFloat(bValue.replace(/[^0-9.-]+/g, ""));
                    if (!isNaN(numA) && !isNaN(numB)) {
                        aValue = numA;
                        bValue = numB;
                    }
                }

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableItems;
    }, [campaignTableData, sortConfig]);

    // Pagination
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(sortedData.length / rowsPerPage);

    const getStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case 'active': return <span className="badge badge-success">{status}</span>;
            case 'paused': return <span className="badge badge-warning">{status}</span>;
            case 'ended': return <span className="badge badge-muted">{status}</span>;
            default: return <span className="badge">{status}</span>;
        }
    };

    return (
        <div className="card w-full flex flex-col delay-7 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-semibold text-lg text-primary">Campaign Performance</h3>
                <button className="btn-secondary rounded-md py-1.5 px-3 text-sm flex items-center gap-2">
                    Export <span className="hidden sm:inline">CSV</span>
                </button>
            </div>

            <div className="data-table-container table-scroll-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('name')} className="group">
                                <div className="flex items-center gap-1">
                                    Campaign Name
                                    <ArrowUpDown size={14} className="text-muted group-hover:text-primary transition-colors" />
                                </div>
                            </th>
                            <th onClick={() => handleSort('channel')} className="group">
                                <div className="flex items-center gap-1">
                                    Channel
                                    <ArrowUpDown size={14} className="text-muted group-hover:text-primary transition-colors" />
                                </div>
                            </th>
                            <th onClick={() => handleSort('impressions')} className="group text-right">
                                <div className="flex items-center justify-end gap-1">
                                    Impressions
                                    <ArrowUpDown size={14} className="text-muted group-hover:text-primary transition-colors" />
                                </div>
                            </th>
                            <th onClick={() => handleSort('clicks')} className="group text-right">
                                <div className="flex items-center justify-end gap-1">
                                    Clicks
                                    <ArrowUpDown size={14} className="text-muted group-hover:text-primary transition-colors" />
                                </div>
                            </th>
                            <th onClick={() => handleSort('ctr')} className="group text-right">
                                <div className="flex items-center justify-end gap-1">
                                    CTR
                                    <ArrowUpDown size={14} className="text-muted group-hover:text-primary transition-colors" />
                                </div>
                            </th>
                            <th onClick={() => handleSort('conversions')} className="group text-right">
                                <div className="flex items-center justify-end gap-1">
                                    Conv.
                                    <ArrowUpDown size={14} className="text-muted group-hover:text-primary transition-colors" />
                                </div>
                            </th>
                            <th onClick={() => handleSort('revenue')} className="group text-right">
                                <div className="flex items-center justify-end gap-1">
                                    Revenue
                                    <ArrowUpDown size={14} className="text-muted group-hover:text-primary transition-colors" />
                                </div>
                            </th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((row) => (
                            <tr key={row.id}>
                                <td className="font-medium text-primary">{row.name}</td>
                                <td>{row.channel}</td>
                                <td className="text-right font-mono text-muted">{row.impressions}</td>
                                <td className="text-right font-mono text-muted">{row.clicks}</td>
                                <td className="text-right font-mono text-primary">{row.ctr}</td>
                                <td className="text-right font-mono text-primary">{row.conversions}</td>
                                <td className="text-right font-mono font-medium text-[var(--color-success)]">{row.revenue}</td>
                                <td>{getStatusBadge(row.status)}</td>
                                <td className="text-right">
                                    <button className="btn-ghost rounded p-1 text-muted hover:text-primary">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-border-subtle)]">
                <span className="text-xs text-muted">
                    Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, sortedData.length)} of {sortedData.length} entries
                </span>
                <div className="flex items-center gap-2">
                    <button
                        className="btn-ghost rounded p-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div className="flex items-center gap-1">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`w-7 h-7 rounded text-sm font-medium transition-colors ${currentPage === i + 1
                                        ? 'bg-[var(--color-bg-elevated)] text-primary border border-[var(--color-border-default)]'
                                        : 'text-muted hover:text-primary hover:bg-[var(--color-bg-overlay)]'
                                    }`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        className="btn-ghost rounded p-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
