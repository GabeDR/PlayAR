import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import { Modal } from './modal';

interface BentoCardProps {
    name: string;
    description: string;
    cta?: string;
    className?: string;
    children?: ReactNode;
    fullDescription?: string;
    modalImage?: ReactNode;
}

export function BentoCard({
    name,
    description,
    cta = "Learn More",
    className,
    children,
    fullDescription,
    modalImage,
}: BentoCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className={cn(
                    "group relative overflow-hidden rounded-3xl bg-white/[0.7] border border-gray-200 hover:bg-white/[0.9] transition-all duration-300 cursor-pointer",
                    className
                )}
                onClick={() => setIsModalOpen(true)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        setIsModalOpen(true);
                    }
                }}
                role="button"
                tabIndex={0}
            >
                <div className="relative z-10 p-8">
                    {children || (
                        <>
                            <h3 className="text-2xl font-bold mb-4">{name}</h3>
                            <p className="text-gray-600 mb-6">{description}</p>
                            <div className="inline-flex items-center text-blue-600 font-medium">
                                {cta}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="md:p-8"
            >
                <div className="pt-6">
                    {modalImage && (
                        <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                            {modalImage}
                        </div>
                    )}
                    <h2 className="text-3xl font-bold mb-6">{name}</h2>
                    <div className="prose prose-lg max-w-none">
                        {fullDescription || description}
                    </div>
                </div>
            </Modal>
        </>
    );
}

interface BentoGridProps {
    className?: string;
    children: ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
    return (
        <div className={cn("grid gap-4", className)}>
            {children}
        </div>
    );
} 