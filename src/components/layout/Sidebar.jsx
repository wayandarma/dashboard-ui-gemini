import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Megaphone,
    Users,
    DollarSign,
    MousePointerClick,
    FileText,
    Settings,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const navItems = [
    { name: 'Overview', path: '/', icon: LayoutDashboard },
    { name: 'Campaigns', path: '/campaigns', icon: Megaphone },
    { name: 'Audience', path: '/audience', icon: Users },
    { name: 'Revenue', path: '/revenue', icon: DollarSign },
    { name: 'Conversions', path: '/conversions', icon: MousePointerClick },
    { name: 'Reports', path: '/reports', icon: FileText },
    { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar({ collapsed, setCollapsed }) {
    // Mobile uses a different paradigm, handled somewhat in CSS, but we apply classes here
    return (
        <aside className={`sidebar flex flex-col justify-between py-6 ${collapsed ? 'collapsed' : ''}`}>
            <div>
                <div className="flex items-center justify-center mb-8 px-4 h-8 overflow-hidden">
                    {collapsed ? (
                        <div className="font-display font-bold text-xl text-primary flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white">
                            C
                        </div>
                    ) : (
                        <div className="font-display font-bold text-2xl tracking-tight text-primary whitespace-nowrap">
                            Campaign<span className="text-[var(--color-accent-primary)]">Pro</span>
                        </div>
                    )}
                </div>

                <nav className="flex flex-col gap-2 px-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-md transition-colors duration-200 relative group
                                ${isActive
                                    ? 'bg-[rgba(61,142,240,0.1)] text-[var(--color-accent-primary)]'
                                    : 'text-muted hover:text-primary hover:bg-elevated'
                                }
                            `}
                            title={collapsed ? item.name : undefined}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-accent-primary)] rounded-r-md"></div>
                                    )}
                                    <item.icon className="w-5 h-5 flex-shrink-0" />
                                    {!collapsed && (
                                        <span className="font-body font-medium text-sm whitespace-nowrap">
                                            {item.name}
                                        </span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="px-4 flex justify-center mt-auto hidden md:flex">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="btn-ghost rounded-full p-2 text-muted hover:text-primary transition-colors"
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>
        </aside>
    );
}
