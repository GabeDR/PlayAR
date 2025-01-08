'use client'

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { BentoGrid, BentoCard } from '../components/bento-grid';

export default function Home() {
  const features = [
    {
      title: "How",
      description: "PlayAR enhances football training by providing an immersive, interactive training environment through augmented and virtual reality technologies.",
      fullDescription: `PlayAR enhances football training by providing an immersive, interactive training environment through augmented and virtual reality technologies. It allows players, especially quarterbacks, to simulate game scenarios, practice plays, and make strategic decisions in real-time without the physical limitations of traditional training.

By integrating advanced software, PlayAR offers realistic simulations and immediate feedback on performance, enabling players to analyze and improve their skills. This approach not only reduces the risk of injury from physical practice but also increases the efficiency and effectiveness of training sessions, ultimately leading to better preparedness and performance in actual games.

Key Features:
• Real-time game scenario simulation
• Immediate performance feedback
• Risk-free practice environment
• Advanced skill analysis tools
• Customizable training programs`,
      image: "quest.jpg",
      className: "lg:col-span-1 lg:row-span-1",
      modalImage: (
        <Image
          src="/quest.jpg"
          alt="VR Training"
          fill
          className="object-cover"
        />
      )
    },
    {
      title: "Why",
      description: "PlayAR offers a cutting-edge training solution with its immersive AR and VR technology, tailored for football practice.",
      fullDescription: `PlayAR offers a cutting-edge training solution with its immersive AR and VR technology, tailored for football practice. It uniquely combines eye-tracking and head movement features to enhance decision-making and confidence in a safe, controlled environment.

Our expertise and strategic partnerships ensure a superior, injury-preventive training experience, making PlayAR the top choice for advanced sports preparation.

Benefits:
• Enhanced decision-making skills
• Improved reaction time
• Better spatial awareness
• Increased confidence
• Reduced injury risk
• Measurable performance improvements`,
      image: "why2.png",
      className: "lg:col-span-1 lg:row-span-1",
      modalImage: (
        <Image
          src="/why2.png"
          alt="AR Benefits"
          fill
          className="object-cover"
        />
      )
    },
    {
      title: "The Problem",
      description: "Traditional training methods often fail to replicate the intensity and complexity of actual game situations.",
      fullDescription: `The primary problem that PlayAR addresses is the lack of realistic, game-specific practice opportunities for football players, particularly quarterbacks. Traditional training methods often fail to replicate the intensity and complexity of actual game situations, which can hinder a player's ability to make quick decisions and execute plays effectively during games.

This gap in training quality can lead to:
• Limited decision-making practice
• Increased risk of injury during physical practice
• Inconsistent skill development
• Difficulty in simulating game pressure
• Limited opportunities for repetition
• Inability to practice complex scenarios safely

PlayAR solves these challenges by providing an immersive training environment using augmented and virtual reality, allowing players to practice and refine their skills in a controlled, realistic setting that mimics the pressures and demands of actual games.`,
      image: "problem.png",
      className: "lg:col-span-1 lg:row-span-1",
      modalImage: (
        <Image
          src="/problem.png"
          alt="Training Problems"
          fill
          className="object-cover"
        />
      )
    },
    {
      title: "Partnerships",
      description: "PlayAR has established partnerships with experts across sports and technology sectors.",
      fullDescription: `PlayAR has established partnerships with leading experts across sports and technology sectors to create a comprehensive and effective training solution:

Key Partners:
• Jeff Johnson - Florida High School Athletic Association
• Dr. Dutch Franz - Virtual Reality Research Lead
• David Pavek - Technology Executive
• Stephen Taylor - VR Specialist, Dell Technologies
• Dr. Manish Gupta - Sports Orthopedic Surgeon
• Edward Perry - Former NFL Player and Coach

These collaborations enrich PlayAR's offering by:
• Incorporating real athletic experience
• Implementing cutting-edge technology
• Ensuring proper sports medicine protocols
• Aligning with educational standards
• Maintaining professional training methodologies`,
      image: "partner.png",
      className: "lg:col-span-1 lg:row-span-1",
      modalImage: (
        <Image
          src="/partner.png"
          alt="Our Partners"
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
              Where virtual practice meets real victory

            </h1>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-sm opacity-70">Find out more</p>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="min-h-screen py-16 px-8 md:px-16">
        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
          {features.map((feature) => (
            <BentoCard
              key={feature.title}
              name={feature.title}
              description={feature.description}
              fullDescription={feature.fullDescription}
              modalImage={feature.modalImage}
              className={feature.className}
            />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}
