import React from 'react';
import StatsCard from '@/components/StatsCard';

const StatsRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <StatsCard
        title="Available Position"
        value="24"
        subtitle="4 Urgently needed"
        className="bg-soft-pink"
      />
      <StatsCard
        title="Job Open"
        value="10"
        subtitle="4 Active hiring"
        className="bg-soft-blue"
      />
      <StatsCard
        title="New Employees"
        value="24"
        subtitle="4 Department"
        className="bg-soft-purple"
      />
    </div>
  );
};

export default StatsRow;