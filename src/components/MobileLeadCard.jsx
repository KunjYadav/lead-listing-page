import React from "react";
import { Mail, Phone } from "lucide-react";
import { AvatarBadge } from "./AvatarBadge";
import { CompanyBadge } from "./CompanyBadge";
import { ServiceBadge } from "./ServiceBadge";
import { StatusBadge } from "./StatusBadge";

export const MobileLeadCard = ({ lead }) => (
  <div className='bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden relative transition-all active:scale-[0.98]'>
    <div className='p-5'>
      <div className='flex justify-between items-start mb-5'>
        <div className='flex items-center gap-3.5'>
          <AvatarBadge name={lead.name} />
          <div>
            <h3 className='font-bold text-slate-900 text-base mb-1'>
              {lead.name}
            </h3>
            <CompanyBadge company={lead.company} />
          </div>
        </div>
        <div className='shrink-0'>
          <StatusBadge status={lead.status} />
        </div>
      </div>

      <div className='bg-slate-50/70 rounded-xl p-4 space-y-3.5 border border-slate-100 mb-5'>
        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center text-slate-500 font-medium gap-2.5'>
            <Mail className='w-4 h-4 text-slate-400' />
            <span>Email</span>
          </div>
          <a
            href={`mailto:${lead.email}`}
            className='font-semibold text-slate-800 truncate max-w-37.5'
          >
            {lead.email}
          </a>
        </div>
        <div className='flex items-center justify-between text-sm'>
          <div className='flex items-center text-slate-500 font-medium gap-2.5'>
            <Phone className='w-4 h-4 text-slate-400' />
            <span>Phone</span>
          </div>
          <a
            href={`tel:${lead.phone}`}
            className='font-semibold text-slate-800'
          >
            {lead.phone}
          </a>
        </div>
      </div>

      <div>
        <ServiceBadge service={lead.service} />
      </div>
    </div>
  </div>
);
