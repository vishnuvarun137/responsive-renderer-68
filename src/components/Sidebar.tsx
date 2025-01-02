import React from 'react';
import { LayoutDashboard, Users, Calendar, UserCircle, Building2, HeadphonesIcon, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Recruitment' },
  { icon: Calendar, label: 'Schedule' },
  { icon: UserCircle, label: 'Employee' },
  { icon: Building2, label: 'Department' },
];

const otherItems = [
  { icon: HeadphonesIcon, label: 'Support' },
  { icon: Settings, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <img 
          src="/lovable-uploads/b20e2566-ecf3-4f0e-9822-b1b78d97c873.png" 
          alt="Vasitum Logo" 
          className="h-8"
        />
      </div>

      <div className="space-y-1">
        <p className="text-sm text-gray-500 mb-4">MAIN MENU</p>
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
              item.active && "bg-primary/10 text-primary"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-1">
        <p className="text-sm text-gray-500 mb-4">OTHER</p>
        {otherItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;