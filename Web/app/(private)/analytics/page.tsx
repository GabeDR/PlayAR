"use client";

import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { TooltipProps } from 'recharts';
import type { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import type { ReactElement } from 'react';

// Only dynamically import the chart container to avoid SSR issues
const ChartContainer = dynamic(() => Promise.resolve(({ children }: { children: ReactElement }) => (
  <div className="h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      {children}
    </ResponsiveContainer>
  </div>
)), { ssr: false });

// Move static data outside component to prevent recreation
const players = {
  Jake: [
    { name: "Time Delay", value: 20, unit: "ms" },
    { name: "Steps", value: 20, unit: "steps" },
    { name: "Players Tracked", value: 20, unit: "players" },
    { name: "Completion Rate", value: 75, unit: "%" },
    { name: "Reaction Time", value: 0.45, unit: "s" }
  ],
  Gabe: [
    { name: "Time Delay", value: 12, unit: "ms" },
    { name: "Steps", value: 40, unit: "steps" },
    { name: "Players Tracked", value: 70, unit: "players" },
    { name: "Completion Rate", value: 85, unit: "%" },
    { name: "Reaction Time", value: 0.35, unit: "s" }
  ],
  Tali: [
    { name: "Time Delay", value: 4, unit: "ms" },
    { name: "Steps", value: 60, unit: "steps" },
    { name: "Players Tracked", value: 120, unit: "players" },
    { name: "Completion Rate", value: 92, unit: "%" },
    { name: "Reaction Time", value: 0.25, unit: "s" }
  ],
  Mehak: [
    { name: "Time Delay", value: 7, unit: "ms" },
    { name: "Steps", value: 30, unit: "steps" },
    { name: "Players Tracked", value: 12, unit: "players" },
    { name: "Completion Rate", value: 52, unit: "%" },
    { name: "Reaction Time", value: 0.65, unit: "s" }
  ],
};

type MetricType = {
  name: string;
  value: number;
  unit: string;
};

// Memoize formatter function to prevent recreation
const tooltipFormatter = (value: ValueType, name: NameType, props: TooltipProps<ValueType, NameType>) => {
  const payload = props.payload?.[0];
  if (!payload) return [value, name];
  return [`${value}${(payload as MetricType).unit}`, (payload as MetricType).name];
};

export default function Analytics({ searchParams: { player } }: { searchParams: { player?: "Jake" | "Gabe" | "Tali" | "Mehak"} }) {
  const selectedPlayer = player ?? "Jake";

  // Memoize player data to prevent unnecessary recalculations
  const playerData = useMemo(() => players[selectedPlayer], [selectedPlayer]);

  // Memoize URL generator to prevent recreation on each render
  const getPlayerUrl = useMemo(() => (playerName: string) => `/analytics?player=${playerName}`, []);

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Performance Analytics</h1>
            <p className="text-gray-600">Detailed metrics and insights</p>
          </div>
          <div className="relative">
            <select
              value={selectedPlayer}
              onChange={(e) => {
                const url = getPlayerUrl(e.target.value);
                window.location.href = url;
              }}
              className="appearance-none bg-white border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Jake">Jake</option>
              <option value="Gabe">Gabe</option>
              <option value="Tali">Tali</option>
              <option value="Mehak">Mehak</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-bold mb-6">Performance Overview</h2>
          <ChartContainer>
            <BarChart data={playerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={tooltipFormatter} />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playerData.map((metric) => (
            <div key={metric.name} className="bg-white p-6 rounded-2xl shadow-sm border">
              <h3 className="text-gray-600 mb-2">{metric.name}</h3>
              <p className="text-3xl font-bold">{metric.value}{metric.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}