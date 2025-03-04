'use client'

import { LayoutDashboard, PlayCircle, BarChart3, Radio, Menu, Home, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useCallback, memo } from 'react';
import Footer from '../footer';

// Move static data outside component
const navItems = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard
    },
    {
        name: 'Live View',
        href: '/live-view',
        icon: Radio
    },
    {
        name: 'Plays',
        href: '/plays',
        icon: PlayCircle
    },
    {
        name: 'Analytics',
        href: '/analytics',
        icon: BarChart3
    }
];

// Memoize NavLink component to prevent unnecessary re-renders
const NavLink = memo(({ href, icon: Icon, name }: { href: string; icon: any; name: string }) => (
    <Link
        href={href}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-blue-600 hover:bg-white/50 transition-colors"
    >
        <Icon className="w-5 h-5 flex-shrink-0" />
        <span>{name}</span>
    </Link>
));
NavLink.displayName = 'NavLink';

// Memoize HomeLink component
const HomeLink = memo(({ isMobile = false }: { isMobile?: boolean }) => (
    <Link
        href="/"
        className={`${isMobile ? '' : 'hidden md:flex'} items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors`}
    >
        <Home className="w-5 h-5" />
        <span>Home</span>
    </Link>
));
HomeLink.displayName = 'HomeLink';

export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isOpen, setIsOpen] = useState(false);

    // Memoize handlers
    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeMenu();
    }, [closeMenu]);

    return (
        <div className="flex flex-col min-h-[calc(100vh-73px)]">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border-b">
                <button
                    onClick={toggleMenu}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    type="button"
                >
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
                <HomeLink isMobile />
            </div>

            <div className="flex flex-1">
                {/* Sidebar */}
                <div className={`
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0
                    fixed md:static
                    top-0 left-0
                    h-full md:h-auto
                    w-64
                    bg-white/80 backdrop-blur-sm
                    border-r
                    transition-transform
                    duration-300
                    ease-in-out
                    z-50
                    md:flex
                `}>
                    <nav className="flex flex-col p-4 gap-2 w-full">
                        {/* Desktop Home Button */}
                        <HomeLink />
                        <div className="my-2 border-t md:block" />
                        {navItems.map((item) => (
                            <NavLink key={item.href} {...item} />
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col min-h-full">
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>

                {/* Mobile Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
                        onClick={closeMenu}
                        onKeyDown={handleKeyDown}
                        role="button"
                        tabIndex={0}
                    />
                )}
            </div>
        </div>
    );
}