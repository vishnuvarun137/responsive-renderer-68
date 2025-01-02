import React from 'react';
import { cn } from '@/lib/utils';

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
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  className,
  trend,
  details,
}) => {
  return (
    <div className={cn("p-6 rounded-xl bg-white border border-gray-200", className)}>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-semibold">{value}</span>
        {trend && (
          <span className="text-sm text-green-500">
            {trend.value} {trend.label}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      
      {details && (
        <div className="mt-4 space-y-2">
          {details.map((detail) => (
            <div key={detail.label} className="flex justify-between text-sm">
              <span className="text-gray-500">{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatsCard;