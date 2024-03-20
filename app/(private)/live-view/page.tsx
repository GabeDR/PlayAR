import ClientImage from "@/app/(public)/client-image";
import Image from "next/image";

export default function LiveView() {
    return (
        <div>
        <h1 className="flex text-5xl font-medium pb-5 justify-center">Live View</h1>
        
            <ClientImage />
            </div> 
    )
}