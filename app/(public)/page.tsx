import { ClientGradient } from "./client-gradient";
import ClientImage from "./client-image";
import dynamic from 'next/dynamic'

export default function Home() {
  const data = [
    {
      title: "How",
      description: "PlayAR enhances football training by providing an immersive, interactive training environment through augmented and virtual reality technologies. It allows players, especially quarterbacks, to simulate game scenarios, practice plays, and make strategic decisions in real-time without the physical limitations of traditional training. By integrating advanced software, PlayAR offers realistic simulations and immediate feedback on performance, enabling players to analyze and improve their skills. This approach not only reduces the risk of injury from physical practice but also increases the efficiency and effectiveness of training sessions, ultimately leading to better preparedness and performance in actual games.",
      image: "quest.jpg"
    },
    {
      title: "Why",
      description: "PlayAR offers a cutting-edge training solution with its immersive AR and VR technology, tailored for football practice. It uniquely combines eye-tracking and head movement features to enhance decision-making and confidence in a safe, controlled environment. Our expertise and strategic partnerships ensure a superior, injury-preventive training experience, making PlayAR the top choice for advanced sports preparation.",
      image: "why2.png"
    },
    {
      title: "The Problem",
      description: "The primary problem that PlayAR addresses is the lack of realistic, game-specific practice opportunities for football players, particularly quarterbacks. Traditional training methods often fail to replicate the intensity and complexity of actual game situations, which can hinder a player's ability to make quick decisions and execute plays effectively during games. This gap in training quality can lead to reduced confidence and suboptimal performance on the field. PlayAR solves this by providing an immersive training environment using augmented and virtual reality, allowing players to practice and refine their skills in a controlled, realistic setting that mimics the pressures and demands of actual games.",
      image: "problem.png"
    },
    {
      title: "Partnerships",
      description: "PlayAR has established partnerships with experts across sports and technology, including Jeff Johnson of the Florida High School Athletic Association, Dr. Dutch Franz from the virtual reality sector, technology executive David Pavek, VR specialist Stephen Taylor from Dell Technologies, sports orthopedic surgeon Dr. Manish Gupta, and former NFL player and coach Edward Perry. These collaborations enrich PlayAR's offering, blending industry insights with technological innovation to create a training platform that is both effective and aligned with the athletic and educational ecosystems needs.",
      image: "partner.png"
    }
  ];

  return (
    <>
      <ClientGradient />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-4 bg-white bg">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-lg w-full p-4 min-h-44 flex flex-col"
          >
            <div className="w-full">
              <img src={item.image} alt={item.title} className="w-full" />
            </div>
            <div className="w-full">
              <div className="text-xl pb-2">{item.title}</div>
              <div className="text-sm">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
