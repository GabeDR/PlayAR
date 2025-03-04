'use client'

import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function AboutPage() {
    // State for the partners carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const partners = [
        { id: 'fhsaa', name: 'FHSAA', logo: '/fhsaa.png' },
        { id: 'meta', name: 'Meta', logo: '/meta.png' },
        { id: 'optima', name: 'Optima', logo: '/optima.png' },
        { id: 'soc', name: 'SOC', logo: '/soc.png' }
    ];

    // Auto-scroll effect for the carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === partners.length - 1 ? 0 : prevIndex + 1
            );

            if (carouselRef.current) {
                const scrollAmount = carouselRef.current.scrollWidth / partners.length;
                carouselRef.current.scrollTo({
                    left: currentIndex * scrollAmount,
                    behavior: 'smooth'
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative py-24 px-8 md:px-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                        Who We Are
                    </h1>
                    <p className="text-xl leading-relaxed text-gray-600">
                        PlayAR is an innovative sports training enterprise that specializes in integrating augmented and virtual reality (AR/VR)
                        technologies to transform the athletic training landscape. We offer a sophisticated platform that allows athletes, particularly
                        football players, to engage in highly realistic, immersive practice sessions.
                    </p>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-24 px-8 md:px-16 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Purpose</h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    PlayAR transforms athletic training with advanced technology, providing athletes with a virtual environment that mimics real-game scenarios.
                                </p>
                                <p>
                                    Through augmented and virtual reality, we enhance players' skills, decision-making, and performance by offering a realistic, interactive training platform.
                                </p>
                                <p>
                                    Our ultimate goal is to revolutionize how athletes train, making it more engaging, efficient, and effective, thereby elevating their potential for success.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square relative rounded-2xl overflow-hidden">
                                <Image
                                    src="/why2.png"
                                    alt="Training in action"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square relative rounded-2xl overflow-hidden">
                                <Image
                                    src="/live.jpeg"
                                    alt="VR Training session"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-24 px-8 md:px-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Founders</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="aspect-square bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
                                <Image
                                    src="/gabe.png"
                                    alt="Gabriel Duarte"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-lg">Gabriel Duarte</h3>
                            <p className="text-gray-600">Software Development</p>
                        </div>
                        <div className="text-center">
                            <div className="aspect-square bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
                                <Image
                                    src="/mehak.png"
                                    alt="Mehak Gadh"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-lg">Mehak Gadh</h3>
                            <p className="text-gray-600">Research and Outreach</p>
                        </div>
                        <div className="text-center">
                            <div className="aspect-square bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
                                <Image
                                    src="/tali.jpeg"
                                    alt="Talia Sverdlik"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-lg">Talia Sverdlik</h3>
                            <p className="text-gray-600">XR Specialist</p>
                        </div>
                        <div className="text-center">
                            <div className="aspect-square bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
                                <Image
                                    src="/jake.jpg"
                                    alt="Jake Weidenfeld"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-lg">Jake Weidenfeld</h3>
                            <p className="text-gray-600">Financials and Football Specialist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-24 px-8 md:px-16 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center gap-2 mb-8">
                        {partners.map((partner) => (
                            <button
                                key={partner.id}
                                type="button"
                                onClick={() => setCurrentIndex(partners.findIndex(p => p.id === partner.id))}
                                className={`w-3 h-3 rounded-full ${currentIndex === partners.findIndex(p => p.id === partner.id) ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to ${partner.name} slide`}
                            />
                        ))}
                    </div>

                    {/* Carousel Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm">
                        <div
                            ref={carouselRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {partners.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="w-full flex-shrink-0 flex justify-center items-center px-8"
                                >
                                    <div className="relative h-32 w-full">
                                        <Image
                                            src={partner.logo}
                                            alt={`${partner.name} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            type="button"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                            onClick={() => setCurrentIndex(prev => prev === 0 ? partners.length - 1 : prev - 1)}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                            onClick={() => setCurrentIndex(prev => prev === partners.length - 1 ? 0 : prev + 1)}
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-8 md:px-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <a href="mailto:gabriel.duarte@pinecrest.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                        gabriel.duarte@pinecrest.edu
                                        mehak.gadh@pinecrest.edu
                                        jake.weidenfeld@pinecrest.edu
                                        talia.sverdlik@pinecrest.edu
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Phone</h3>
                                    <a href="tel:+18001234567" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                        +1 (561) 299-5924
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Globe className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Website</h3>
                                    <a href="https://www.playar.com/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                        www.playar.com/contact
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-6">Schedule a Demo</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Interested in seeing PlayAR in action? Schedule a demo with our team and experience the future of athletic training firsthand.
                            </p>
                            <a href="/dashboard">
                                <button
                                    type="button"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-2xl transition-colors"
                                >
                                    Request Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}