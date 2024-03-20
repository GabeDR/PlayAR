import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import { RightDrawer } from "./drawer";
import { ClientButton } from "./clientButton";

export default function Dashboard({searchParams: {drawer}}: {searchParams: {drawer: "true" | "false" | undefined}}) {
    return (
        <>
        <div className="flex justify-end text-4xl font-semibold py-4">Welcome, PlayAR</div>
        <div className="text-lg text-gray-700 flex justify-end py-1"><div>Pine Crest School</div></div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-4">
            <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                <div className="text-xl pb-2">Latest Data</div>
                <div className="text-sm">blah blah blah</div>
            </div>
            <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                <div className="text-xl pb-2">Plays</div>
                <div className="text-sm">blah blah blah</div>
            </div>
            <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                <div className="text-xl pb-2">Critical Alerts</div>
                <div className="text-sm">blah blah blah</div>
            </div>
            <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                <div className="text-xl pb-2">Best Players</div>
                <div className="text-sm">blah blah blah</div>
            </div>
            </div>
        </>
    )
}