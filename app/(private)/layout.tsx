import { ReactNode } from "react";
import { RightDrawer } from "./dashboard/drawer";

export default function PrivateLayout({children}: {children: ReactNode}) {
    return ( 
        <>
                <div className="flex py-4 justify-between"><RightDrawer /></div>
                {children}
        </>
    )
}