import React from 'react';
import { Search, Bell, MessageSquare, ChevronDown } from 'lucide-react';
import { Input } from './ui/input';

const Navbar = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-10 w-full bg-gray-50"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MessageSquare className="w-5 h-5 text-gray-600" />
        </button>
        
        <button className="flex items-center gap-3 hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
          <img
            src="https://ui-avatars.com/api/?name=Admirra+John"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-left">
            <p className="text-sm font-medium">Admirra John</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;