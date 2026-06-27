import React from "react";
import {
  User,
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const SummaryCards = ({ leads }) => {
  const totals = leads.reduce(
    (acc, lead) => {
      acc[lead.status] = (acc[lead.status] || 0) + 1;
      acc.Total = (acc.Total || 0) + 1;
      return acc;
    },
    { Total: 0, New: 0, Contacted: 0, "Follow-up": 0, Converted: 0, Lost: 0 },
  );

  const icons = {
    Total: <User className='w-5 h-5 text-slate-400' />,
    New: <Sparkles className='w-5 h-5 text-blue-500' />,
    Contacted: <MessageCircle className='w-5 h-5 text-amber-500' />,
    "Follow-up": <Clock className='w-5 h-5 text-purple-500' />,
    Converted: <CheckCircle2 className='w-5 h-5 text-emerald-500' />,
    Lost: <XCircle className='w-5 h-5 text-rose-500' />,
  };

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-10'>
      {Object.entries(totals).map(([status, count]) => (
        <div
          key={status}
          className='bg-white p-5 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between hover:shadow-md transition-shadow'
        >
          <div className='flex justify-between items-start mb-4'>
            <span className='text-slate-500 text-xs font-bold uppercase tracking-wider'>
              {status}
            </span>
            {icons[status]}
          </div>
          <span className='text-4xl font-extrabold text-slate-800'>
            {count}
          </span>
        </div>
      ))}
    </div>
  );
};
