import React from "react";
import { Inbox } from "lucide-react";

export const EmptyState = ({ onClear }) => (
  <div className='bg-white rounded-3xl shadow-sm border border-slate-200/60 p-16 flex flex-col items-center justify-center text-center'>
    <div className='bg-slate-50 p-6 rounded-full mb-6'>
      <Inbox className='h-10 w-10 text-slate-400' />
    </div>
    <h3 className='text-2xl font-bold text-slate-900 mb-2'>No leads found</h3>
    <p className='text-slate-500 text-lg max-w-md'>
      We couldn't find any leads matching your current search or filter
      criteria. Try adjusting your filters to see more results.
    </p>
    <button
      onClick={onClear}
      className='mt-8 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors'
    >
      Clear all filters
    </button>
  </div>
);
