import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import { RightDrawer } from "./drawer";
import { ClientButton } from "./clientButton";


export default function Dashboard({searchParams: {drawer}}: {searchParams: {drawer: "true" | "false" | undefined}}) {
    return (
        <>
            <div className="flex justify-end text-4xl font-semibold py-4">Welcome, PlayAR</div>

            <div className="text-lg text-gray-700 flex justify-end py-1">
                <div>School: Pine Crest School</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-4">
                <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                    <div className="text-2xl pb- font-bold">Latest Data</div>
                    <div className="text-sm">Complete Catches: 23 catches out of 30 attempts.</div>
                    <div className="text-sm">Time on Field: 45 minutes per game average.</div>
                    <div className="text-sm">Pass Accuracy: 78% completion rate.</div>
                    <div className="text-sm">Defensive Disruptions: 12 disruptions per game</div>
                    <div className="text-sm">Reaction Times: Average reaction time of 0.45 seconds</div>
                </div>

                <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                    <div className="text-2xl pb-2 font-bold">Plays</div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="text-sm">Smash</div>
                        <div className="text-sm">2022-01-01</div>
                        <div className="text-sm">Flood</div>
                        <div className="text-sm">2022-01-02</div>
                        <div className="text-sm">Mesh</div>
                        <div className="text-sm">2022-01-03</div>
                        <div className="text-sm">Hoss</div>
                        <div className="text-sm">2022-01-04</div>
                    </div>
                </div>

                <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                    <div className="text-2xl pb-2 font-bold">Critical Alerts</div>
                    <div className="text-sm">Alert: VR headset connectivity issue detected. Please restart your device before resuming the training session.</div>
                </div>

                <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                    <div className="text-2xl pb-2 font-bold">Best Players</div>
                    <div className="text-base">Broke the drill speed record at 3.2 seconds</div>
                    <div>Perfect score in target training</div>
                    <div>Achieved 95% accuracy in target simulation</div>
                </div>
            </div>
        </>
    )
}