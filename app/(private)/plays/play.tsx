"use client"

import { Button } from "@/components/ui/button"
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons"
import { useRef } from "react"
import { useHover } from "usehooks-ts"

export default function Play({x}: {x: number}) {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)
    return (
        <div ref={hoverRef} className="flex items-center justify-between rounded-lg bg-gray-100 h-16 px-4 cursor-pointer">
        <div>{`${x}`}</div>
        <div className="flex items-center gap-2">                    
        {isHover && <>
            <Button variant="ghost" size="icon" className="hover:bg-gray-200">
            <Pencil1Icon />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-200">
            <TrashIcon />
        </Button >
        <Button variant="ghost" size="icon" className="hover:bg-gray-200">
            <EyeOpenIcon />
        </Button>
        </>}</div>
    </div>
    )
}