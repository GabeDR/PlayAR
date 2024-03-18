"use client";

import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { redirect } from "next/navigation"

export function ClientButton({drawer}: {drawer?: string}) {
    return (
        <Button onClick={() => { redirect(`/dashboard?drawer${drawer ===  "true" ? "false": "true"}`)}}><HamburgerMenuIcon /></Button>
    )
}