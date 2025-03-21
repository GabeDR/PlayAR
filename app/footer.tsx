import { Mail, Phone, MapPin, Linkedin, Twitter, } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-600">
                                <a href="mailto:info@playar.tech" className="hover:text-blue-600 transition-colors">
                                    gabriel.duarte@pinecrest.edu
                                    mehak.gadh@pinecrest.edu
                                    jake.weidenfeld@pinecrest.edu
                                    talia.sverdlik@pinecrest.edu
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Phone className="w-4 h-4" />
                                <a href="tel:+1-305-555-0123" className="hover:text-blue-600 transition-colors">
                                    (561) 299-5924
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <nav className="space-y-3">
                            <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                About Us
                            </Link>
                            <Link href="/pricing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                Pricing
                            </Link>
                            <Link href="/dashboard" className="block text-gray-600 hover:text-blue-600 transition-colors">
                                Demo
                            </Link>
                        </nav>
                    </div>



                    {/* Social */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/play-ar" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/Play_AR_" target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            Follow us for the latest updates, training tips, and success stories.
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-gray-600 text-sm">
                    <p>© 2025 PlayAR. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
