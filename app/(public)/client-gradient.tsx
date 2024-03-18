// @ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import { Gradient } from './gradient.js'

type GradientType = {
    initGradient: (x: string) => void
} 

export function ClientGradient() {

      // Create your instance
  const gradient = new Gradient() 

  // Call `initGradient` with the selector to your canvas
  gradient.initGradient('#gradient-canvas')
    return (
        <div className='relative h-96 bg-blue-200/20 rounded-lg'>
         <canvas id="gradient-canvas" data-transition-in className='h-full' />
         <div className='absolute bottom-5 right-5'>
      <div className="flex justify-end text-4xl font-semibold py-4"><div>Join PlayAR</div></div>
      <div className="flex justify-end text-lg py-2"><Button>Sign Up Now</Button></div>
    </div>
        </div>
    )
}