import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1A1D1F]">Upcoming Schedule</h2>
        <button className="text-sm text-accent-blue font-medium">Create</button>
      </div>
      
      <div className="space-y-4">
        {[
          {
            title: "Review candidate applications",
            time: "Today - 11.30 AM",
            priority: true,
          },
          {
            title: "Interview with candidates",
            time: "Today - 10.30 AM",
          },
          {
            title: "Short meeting with product designer",
            time: "Today - 09.15 AM",
          },
        ].map((schedule) => (
          <div
            key={schedule.title}
            className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <h3 className="font-medium text-[#1A1D1F]">{schedule.title}</h3>
              <p className="text-sm text-[#6F767E] mt-1">{schedule.time}</p>
            </div>
            {schedule.priority && (
              <span className="px-2 py-1 bg-red-100 text-accent-red text-xs rounded-full font-medium">
                Priority
              </span>
            )}
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;