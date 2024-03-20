import ClientImage from "./client-image";
import dynamic from 'next/dynamic'
import { ClientGradient } from "./client-gradient";

export default function Home() {
  return (
    <>
    <ClientGradient />
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-4 bg-white bg">{[1,2,3,4,5,6].map(x => [2,3,6].includes(x) ?
            <div className="rounded-lg w-full p-4 min-h-44">
                <div className="text-xl pb-2">How</div>
                <div className="text-sm">PlayAR integrates with the Meta Quest Pro to offer immersive football training through augmented and virtual reality. It utilizes the headset's eye-tracking and head movement features, enabling quarterbacks to practice game scenarios realistically and independently. This enhances their decision-making and on-field confidence, providing a safe and effective training environment.</div>
                <div className="text-xl pb-2">Why</div>
                <div className="text-sm">PlayAR offers a cutting-edge training solution with its immersive AR and VR technology, tailored for football practice. It uniquely combines eye-tracking and head movement features to enhance decision-making and confidence in a safe, controlled environment. Our expertise and strategic partnerships ensure a superior, injury-preventive training experience, making PlayAR the top choice for advanced sports preparation.</div>
            </div> : <ClientImage />)
            }</div>
    </>
  );
}
