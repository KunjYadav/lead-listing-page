import React from "react";
import { Briefcase } from "lucide-react";

export const ServiceBadge = ({ service }) => (
  <span className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60'>
    <Briefcase className='w-3.5 h-3.5 text-slate-500' />
    {service}
  </span>
);
