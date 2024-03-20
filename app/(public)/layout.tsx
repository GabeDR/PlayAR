import { ReactNode } from "react";
import Header from "../header";

export default function Publiclayout({children}: {children: ReactNode}) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
