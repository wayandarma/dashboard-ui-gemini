import React, { useState, useEffect } from 'react';
import { Sun, Moon, Bell, Search, ChevronDown } from 'lucide-react';

export default function Topbar() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Check initial theme or system preference if needed. Default is dark.
        if (theme === 'light') {
            document.documentElement.classList.add('theme-light');
        } else {
            document.documentElement.classList.remove('theme-light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="topbar w-full">
            <div className="flex items-center justify-between w-full h-full">

                {/* Left Side: Title */}
                <div className="flex items-center">
                    <h1 className="font-display font-semibold text-xl tracking-tight text-primary">
                        Campaign Overview
                    </h1>
                </div>

                {/* Right Side: Controls */}
                <div className="flex items-center gap-4">

                    {/* Filters - hidden on very small screens */}
                    <div className="hidden md:flex items-center gap-3 mr-4">
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] bg-transparent text-sm font-medium text-secondary transition-colors">
                                Last 30 days
                                <ChevronDown size={14} />
                            </button>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] bg-transparent text-sm font-medium text-secondary transition-colors">
                                All Campaigns
                                <ChevronDown size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Icon Controls */}
                    <div className="flex items-center gap-1">
                        <button className="btn-ghost rounded-full p-2" aria-label="Search">
                            <Search size={18} />
                        </button>
                        <button className="btn-ghost rounded-full p-2 relative" aria-label="Notifications">
                            <Bell size={18} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[var(--color-accent-primary)] border-2 border-[var(--color-bg-surface)]"></span>
                        </button>
                        <button
                            className="btn-ghost rounded-full p-2 ml-1"
                            onClick={toggleTheme}
                            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    {/* Separator */}
                    <div className="w-px h-6 bg-[var(--color-border-subtle)] mx-2"></div>

                    {/* User Avatar */}
                    <button className="flex items-center gap-2 group cursor-pointer" aria-label="User menu">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--color-accent-secondary)] to-[var(--color-accent-primary)] flex items-center justify-center text-white font-medium text-sm border border-[var(--color-border-subtle)] group-hover:border-[var(--color-border-strong)] transition-colors">
                            WD
                        </div>
                    </button>

                </div>
            </div>
        </header>
    );
}
