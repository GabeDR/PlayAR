"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { redirect } from "next/navigation";
import Link from "next/link";
  
export default function page({searchParams: {player}}: {searchParams: {player?:  string}}) {

    const playerWithDefault = player ?? "Jake";

    const data = {
        Jake: [
            {
                name: "Time Delay", 
                stat: 20
            },
            {
                name: "Steps", 
                stat: 20
            },
            {
                name: "Players Looked At", 
                stat: 20
            }
        ],
        Gabe: [
            {
                name: "Time Delay", 
                stat: 12
            },
            {
                name: "Steps", 
                stat: 40
            },
            {
                name: "Players Looked At", 
                stat: 70
            }
        ],
        Tali: [
            {
                name: "Time Delay", 
                stat: 4
            },
            {
                name: "Steps", 
                stat: 60
            },
            {
                name: "Players Looked At", 
                stat: 120
            }
        ],
        
    }

    return (
        <>
        <div className="flex justify-between py-4 text-4xl font-semibold"><div>Analytics</div>
        <Select onValueChange={(x) => {redirect(`/analytics?player=${x}`)}}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={playerWithDefault} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Jake">Jake</SelectItem>
    <SelectItem value="Gabe">Gabe</SelectItem>
    <SelectItem value="Tali">Tali</SelectItem>
  </SelectContent>
</Select>
</div>
<Table>
  <TableCaption>Last Updated 16:05:04</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Title</TableHead>
      <TableHead className="text-right">Stat</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        data[playerWithDefault].map(({name, stat}) =>    <TableRow>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell className="text-right">{stat}</TableCell>
          </TableRow>)
    }
  </TableBody>
</Table>

        </>
    )
}