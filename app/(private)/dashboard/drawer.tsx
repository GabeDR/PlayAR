import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerContentLeft
  } from "@/components/ui/drawer"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { redirect } from "next/navigation"
  
export function RightDrawer() {
    return (
        <Drawer direction="left">
  <DrawerTrigger asChild>     
    <Button variant="ghost" size="icon"><HamburgerMenuIcon /></Button>
  </DrawerTrigger>
  <DrawerContentLeft className="bg-white flex flex-col gap-4 justify-center rounded-t-[10px] h-full w-[400px] fixed ">
    <Button asChild variant="ghost"><Link href="/live-view">Live</Link></Button>
    <Button asChild variant="ghost"><Link href="/plays">Plays</Link></Button>
    <Button asChild variant="ghost"><Link href="/analytics">Analytics</Link></Button>
    <Button asChild variant="ghost"><Link href="/settings">Settings</Link></Button>
  </DrawerContentLeft>
</Drawer>

    )
}