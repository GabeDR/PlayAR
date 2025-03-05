import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

export default function Page() {
    const login = async (formData: FormData) => {
        "use server";
        const rawFormData = Object.fromEntries(formData)

        redirect('/dashboard')
    }

    return (
        <div className="flex items-center justify-center h-96"><form action={login} className="w-96 p-4 flex flex-col gap-4 border border-gray-200 rounded-lg">
            <div>Sign In</div>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" />
        <Button>Submit</Button>
    </form></div>
    )
}