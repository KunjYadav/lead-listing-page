import React from "react";
import { Building } from "lucide-react";

export const CompanyBadge = ({ company }) => (
  <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50/60 text-indigo-800 text-xs font-semibold border border-indigo-100/60'>
    <Building className='w-3 h-3 text-indigo-400' />
    {company}
  </span>
);
