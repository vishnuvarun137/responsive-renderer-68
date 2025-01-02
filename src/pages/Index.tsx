import React from 'react';
import Layout from '@/components/Layout';
import StatsCard from '@/components/StatsCard';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Available Position"
            value="24"
            subtitle="4 Urgently needed"
            className="bg-soft-pink/20"
          />
          <StatsCard
            title="Job Open"
            value="10"
            subtitle="4 Active hiring"
            className="bg-soft-blue/20"
          />
          <StatsCard
            title="New Employees"
            value="24"
            subtitle="4 Department"
            className="bg-soft-purple/20"
          />
          <StatsCard
            title="Total Employees"
            value="216"
            subtitle="120 Men"
            trend={{ value: "+2%", label: "Past month" }}
            details={[
              { label: "Men", value: 120 },
              { label: "Women", value: 96 },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Announcement</h2>
                <button className="text-sm text-primary">See All</button>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Outing schedule for every department",
                    time: "5 Minutes ago",
                  },
                  {
                    title: "Meeting HR Department",
                    time: "Yesterday, 12:30 PM",
                  },
                  {
                    title: "IT Department needs two more talents for UX/UI Designer position",
                    time: "Yesterday, 09:15 AM",
                  },
                ].map((announcement) => (
                  <div
                    key={announcement.title}
                    className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{announcement.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#14183E] text-white rounded-xl p-6">
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

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Upcoming Schedule</h2>
                <button className="text-sm text-primary">Create</button>
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
                      <h3 className="font-medium text-gray-900">{schedule.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{schedule.time}</p>
                    </div>
                    {schedule.priority && (
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                        Priority
                      </span>
                    )}
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