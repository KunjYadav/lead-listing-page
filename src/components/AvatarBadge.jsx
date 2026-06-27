import React from "react";

const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

export const AvatarBadge = ({ name }) => (
  <div className='shrink-0 h-10 w-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center'>
    <span className='text-indigo-600 font-bold text-sm tracking-wide'>
      {getInitials(name)}
    </span>
  </div>
);
