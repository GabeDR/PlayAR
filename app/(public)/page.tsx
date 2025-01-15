'use client'

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { BentoGrid, BentoCard } from '../components/bento-grid';

export default function Home() {
  const features = [
    {
      title: "Training Innovation",
      description: "Experience next-generation quarterback training with advanced motion tracking and real-time feedback.",
      fullDescription: `Our innovative training platform combines cutting-edge motion tracking with real-time feedback systems to revolutionize quarterback development. Using advanced sensors and AI analysis, we track every aspect of your performance:

• Motion accuracy tracking
• Decision-making speed analysis
• Progression reading metrics
• Footwork precision monitoring
• Release timing optimization

Each session provides detailed insights and personalized recommendations for improvement, helping you develop faster and more effectively than traditional training methods.`,
      image: "training.jpg",
      className: "md:col-span-2 md:row-span-2",
      modalImage: (
        <Image
          src="/training.jpg"
          alt="Training Innovation"
          fill
          className="object-cover"
        />
      )
    },
    {
      title: "Real-Time Analysis",
      description: "Get instant feedback on your performance with our AI-powered analysis system.",
      fullDescription: `Our real-time analysis system processes your movements and decisions instantly, providing immediate feedback that helps you adjust and improve on the fly. Key features include:

• Instant performance metrics
• Live form correction
• Decision analysis
• Comparative benchmarking
• Progress tracking

This immediate feedback loop accelerates learning and helps develop muscle memory more effectively than traditional delayed feedback methods.`,
      image: "analysis.jpg",
      className: "md:col-span-1 md:row-span-1",
      modalImage: (
        <Image
          src="/analysis.jpg"
          alt="Real-Time Analysis"
          fill
          className="object-cover"
        />
      )
    },
    {
      title: "Virtual Defense",
      description: "Face dynamic, AI-driven defensive scenarios that adapt to your skill level.",
      fullDescription: `Our virtual defense system creates realistic, challenging scenarios that adapt to your performance level. The system includes:

• Dynamic defensive formations
• Adaptive difficulty scaling
• Situation-based scenarios
• Coverage recognition training
• Blitz identification practice

The AI continuously adjusts to provide the perfect level of challenge, ensuring you're always pushing your limits while maintaining confidence.`,
      image: "defense.jpg",
      className: "md:col-span-1 md:row-span-2",
      modalImage: (
        <Image
          src="/defense.jpg"
          alt="Virtual Defense"
          fill
          className="object-cover"
        />
      )
    },
    {
      title: "Performance Tracking",
      description: "Track your progress with detailed analytics and performance metrics.",
      fullDescription: `Our comprehensive performance tracking system helps you monitor your development over time with detailed metrics and analytics:

• Historical performance data
• Skill progression charts
• Weakness identification
• Strength assessment
• Custom goal tracking

The system helps identify patterns in your performance and suggests focused training areas for maximum improvement.`,
      image: "metrics.jpg",
      className: "md:col-span-2 md:row-span-1",
      modalImage: (
        <Image
          src="/metrics.jpg"
          alt="Performance Metrics"
          fill
          className="object-cover"
        />
      )
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center relative px-8 md:px-16">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/logo.png"
              alt="PlayAR Logo"
              width={500}
              height={200}
              className="w-full max-w-[500px]"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The Future of Quarterback Training
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Revolutionizing football practice with immersive AR/VR technology
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-sm opacity-70">Discover More</p>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="min-h-screen py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience the Difference</h2>
          <BentoGrid className="grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
            {features.map((feature) => (
              <BentoCard
                key={feature.title}
                name={feature.title}
                description={feature.description}
                fullDescription={feature.fullDescription}
                modalImage={feature.modalImage}
                className={`
                  ${feature.title === "Training Innovation" ? "md:col-span-2 md:row-span-2" : ""}
                  ${feature.title === "Virtual Defense" ? "md:col-span-1 md:row-span-1" : ""}
                  ${feature.title === "Real-Time Analysis" ? "md:col-span-1 md:row-span-1" : ""}
                  ${feature.title === "Performance Tracking" ? "md:col-span-2 md:row-span-1" : ""}
                `}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </main>
  );
}
