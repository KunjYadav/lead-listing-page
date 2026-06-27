import React from "react";
import { Search } from "lucide-react";

export const SearchInput = ({ value, onChange }) => (
  <div className='relative flex-1 w-full'>
    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
      <Search className='h-5 w-5 text-slate-400' />
    </div>
    <input
      type='text'
      className='block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all text-sm font-medium placeholder-slate-400'
      placeholder='Search by name, email, or company...'
      value={value}
      onChange={onChange}
    />
  </div>
);
