"use client"

import { Button } from "@/components/ui/button"
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { useRef } from "react"
import { useHover } from "usehooks-ts"

export default function Settings() {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    return (
        <p>Settings</p>
    
    )
}