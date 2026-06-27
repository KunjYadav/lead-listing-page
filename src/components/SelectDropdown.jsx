import React from "react";
import { ChevronDown } from "lucide-react";

export const SelectDropdown = ({
  icon: Icon,
  value,
  onChange,
  options,
  defaultOption,
}) => (
  <div className='relative w-1/2 md:w-56'>
    <div className='absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none'>
      <Icon className='h-4 w-4 text-slate-400' />
    </div>
    <select
      className='block w-full pl-9 md:pl-11 pr-8 md:pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none cursor-pointer text-sm font-medium transition-all'
      value={value}
      onChange={onChange}
    >
      {defaultOption && (
        <option value={defaultOption.value}>{defaultOption.label}</option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <div className='absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center pointer-events-none'>
      <ChevronDown className='h-4 w-4 text-slate-400' />
    </div>
  </div>
);
