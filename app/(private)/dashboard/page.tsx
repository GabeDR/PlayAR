import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import { RightDrawer } from "./drawer";
import { ClientButton } from "./clientButton";

export default function Dashboard({searchParams: {drawer}}: {searchParams: {drawer: "true" | "false" | undefined}}) {
    return (
        <>
        <div className="flex justify-end text-4xl font-semibold py-4">Welcome Gabriel</div>
        <div className="text-sm text-gray-700 flex justify-end py-1"><div>team name</div></div>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 py-4">{[1,2,3,4].map(x => 
            <div className="rounded-lg bg-gray-100 w-full p-4 min-h-44">
                <div className="text-xl pb-2">Title</div>
                <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>)
            }</div>
        </>
    )
}