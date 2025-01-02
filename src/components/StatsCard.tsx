import React from 'react';
import { cn } from '@/lib/utils';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  className?: string;
  trend?: {
    value: string;
    label: string;
  };
  details?: {
    label: string;
    value: number;
  }[];
  showGraph?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  className,
  trend,
  details,
  showGraph = false,
}) => {
  const data = [
    { value: 30 },
    { value: 40 },
    { value: 35 },
    { value: 50 },
    { value: 45 },
    { value: 60 },
    { value: 55 },
  ];

  return (
    <div 
      className={cn(
        "p-8 rounded-[20px] bg-white transition-all", 
        className
      )}
    >
      <h3 className="text-2xl font-semibold text-navy-blue mb-6">{title}</h3>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <span className="text-[56px] leading-none font-bold text-navy-blue block mb-3">{value}</span>
          <p className="text-lg text-accent-red">{subtitle}</p>
        </div>
        {trend && (
          <div className="flex flex-col items-end">
            <span className="text-accent-red text-lg font-medium">
              {trend.value}
            </span>
            <span className="text-sm text-text-secondary mt-1">
              {trend.label}
            </span>
          </div>
        )}
      </div>
      
      {showGraph && (
        <div className="h-16 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#FF5151"
                fill="#FFE6E6"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
      
      {details && (
        <div className="mt-6 space-y-3">
          {details.map((detail) => (
            <div key={detail.label} className="flex justify-between text-lg">
              <span className="text-text-secondary">{detail.label}</span>
              <span className="font-medium text-navy-blue">{detail.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatsCard;