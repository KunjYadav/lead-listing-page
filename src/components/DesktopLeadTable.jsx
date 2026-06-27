import React from "react";
import { Mail, Phone } from "lucide-react";
import { AvatarBadge } from "./AvatarBadge";
import { CompanyBadge } from "./CompanyBadge";
import { ServiceBadge } from "./ServiceBadge";
import { StatusBadge } from "./StatusBadge";

export const DesktopLeadTable = ({ leads }) => (
  <div className='hidden md:block bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden'>
    <div className='overflow-x-auto'>
      <table className='w-full text-left border-collapse'>
        <thead>
          <tr className='bg-slate-50/50 border-b border-slate-100'>
            <th className='px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest'>
              Name
            </th>
            <th className='px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest'>
              Contact Info
            </th>
            <th className='px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest'>
              Company
            </th>
            <th className='px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest'>
              Service Required
            </th>
            <th className='px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest'>
              Status
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-slate-100'>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className='hover:bg-slate-50/80 transition-colors group'
            >
              <td className='px-8 py-6 whitespace-nowrap'>
                <div className='flex items-center gap-4'>
                  <AvatarBadge name={lead.name} />
                  <div className='font-bold text-slate-900 text-[15px]'>
                    {lead.name}
                  </div>
                </div>
              </td>
              <td className='px-8 py-6 whitespace-nowrap'>
                <div className='flex flex-col gap-2'>
                  <span className='flex items-center gap-2 text-sm text-slate-600'>
                    <Mail className='w-3.5 h-3.5 text-slate-400' /> {lead.email}
                  </span>
                  <span className='flex items-center gap-2 text-sm text-slate-600'>
                    <Phone className='w-3.5 h-3.5 text-slate-400' />{" "}
                    {lead.phone}
                  </span>
                </div>
              </td>
              <td className='px-8 py-6 whitespace-nowrap'>
                <CompanyBadge company={lead.company} />
              </td>
              <td className='px-8 py-6 whitespace-nowrap'>
                <ServiceBadge service={lead.service} />
              </td>
              <td className='px-8 py-6 whitespace-nowrap'>
                <StatusBadge status={lead.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
