import React from 'react';
import Layout from '@/components/Layout';
import StatsRow from '@/components/dashboard/StatsRow';
import DetailedStatsRow from '@/components/dashboard/DetailedStatsRow';
import UpcomingSchedule from '@/components/dashboard/UpcomingSchedule';
import { PinIcon, MoreHorizontal } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-navy-blue">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* First row - Stats cards */}
          <div className="lg:col-span-2">
            <StatsRow />
          </div>

          {/* Recent Activity Card - Desktop Only */}
          <div className="hidden lg:block row-span-2">
            <div className="bg-navy-blue text-white rounded-[20px] p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Recently Activity</h2>
                <span className="text-sm opacity-60">10.40 AM, Fri 10 Sept 2021</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">You Posted a New Job</h3>
              <p className="text-sm opacity-80 mb-4">
                Kindly check the requirements and terms of work and make sure everything is right.
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-60">Today you makes 12 Activity</span>
                <button className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors">
                  See All Activity
                </button>
              </div>
            </div>
          </div>

          {/* Second row - Detailed stats and Upcoming Schedule */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailedStatsRow />
            <div className="md:col-span-2 lg:col-span-1">
              <UpcomingSchedule />
            </div>
          </div>

          {/* Announcements Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-[#1A1D1F]">Announcement</h2>
                <button className="text-sm text-accent-blue font-medium">See All</button>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Outing schedule for every departement",
                    time: "5 Minutes ago",
                    pinned: true,
                  },
                  {
                    title: "Meeting HR Department",
                    time: "Yesterday, 12:30 PM",
                    pinned: false,
                  },
                  {
                    title: "IT Department needs two more talents for UX/UI Designer position",
                    time: "Yesterday, 09:15 AM",
                    pinned: false,
                  },
                ].map((announcement) => (
                  <div
                    key={announcement.title}
                    className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer flex gap-3"
                  >
                    <PinIcon 
                      className={`h-5 w-5 mt-1 flex-shrink-0 ${
                        announcement.pinned 
                          ? "text-accent-red" 
                          : "text-gray-300"
                      }`} 
                    />
                    <div className="flex-1">
                      <h3 className={`font-medium text-[#1A1D1F] ${
                        announcement.pinned ? "font-semibold" : ""
                      }`}>
                        {announcement.title}
                      </h3>
                      <p className="text-sm text-[#6F767E] mt-1">{announcement.time}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;