import Image from "next/image";
import pic1 from "../../public/quest.jpg"

export default function ClientImage() {
    return (  
        <Image src={pic1} alt="hello" className="rounded-lg"/>
    )
}