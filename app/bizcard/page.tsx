'use client'

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Mail, Phone, Globe, MapPin, Instagram, Twitter, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react'

export default function BusinessCard() {
    const [mounted, setMounted] = useState(false)

    // Ensure hydration
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const contactLinks = [
        {
            id: 'email',
            label: 'Email Us',
            href: 'mailto:contact@playar.com',
            icon: <Mail className="w-5 h-5" />,
            description: 'contact@playar.com'
        },
        {
            id: 'website',
            label: 'Visit Our Website',
            href: 'https://www.playar.co',
            icon: <Globe className="w-5 h-5" />,
            description: 'www.playar.co'
        },
    ]

    const socialLinks = [
        {
            id: 'twitter',
            label: 'Twitter',
            href: 'https://twitter.com/playar',
            icon: <Twitter className="w-5 h-5" />,
            color: 'bg-blue-400'
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            href: 'https://linkedin.com/company/playar',
            icon: <Linkedin className="w-5 h-5" />,
            color: 'bg-blue-700'
        },
    ]

    return (
        <div className="min-h-screen bg-white px-4 py-12">
            <div className="max-w-md mx-auto">
                {/* Logo */}
                <div className="flex justify-center mb-10">
                    <div className="w-32 h-32 relative">
                        <Image
                            src="/logo.png"
                            alt="PlayAR Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Contact Links */}
                <div className="space-y-4 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    {contactLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                    {link.icon}
                                </div>
                                <div>
                                    <div className="font-medium text-lg">{link.label}</div>
                                    <div className="text-sm text-gray-500">{link.description}</div>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                        </a>
                    ))}
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h2>
                    <div className="grid grid-cols-1 gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`${link.color} p-2 rounded-full text-white`}>
                                        {link.icon}
                                    </div>
                                    <div className="font-medium text-base">{link.label}</div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-400" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
