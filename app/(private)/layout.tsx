import { ReactNode } from "react";
import { RightDrawer } from "./dashboard/drawer";

export default function PrivateLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex row py-4 justify-end">
                <RightDrawer />
            </div>
            {children}
        </>
    )
}