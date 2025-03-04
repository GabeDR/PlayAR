import Image from "next/image";
import pic1 from "../../public/quest.jpg"
import pic2 from "../../public/live.jpeg"

export default function ClientImage() {
    return (  
        <Image src={pic2} alt="hello" className="rounded-lg"/>
    )
}