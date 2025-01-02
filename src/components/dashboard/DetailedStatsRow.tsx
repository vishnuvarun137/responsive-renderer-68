import React from 'react';
import StatsCard from '@/components/StatsCard';

const DetailedStatsRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatsCard
        title="Total Employees"
        value="216"
        subtitle="120 Men"
        trend={{ value: "+2%", label: "Past month" }}
        details={[
          { label: "Men", value: 120 },
          { label: "Women", value: 96 },
        ]}
        showGraph={true}
        className="bg-white shadow-sm"
      />
      <StatsCard
        title="Talent Request"
        value="16"
        subtitle="6 Men"
        trend={{ value: "+5%", label: "Past month" }}
        details={[
          { label: "Men", value: 6 },
          { label: "Women", value: 10 },
        ]}
        showGraph={true}
        className="bg-white shadow-sm"
      />
    </div>
  );
};

export default DetailedStatsRow;