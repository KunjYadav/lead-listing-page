import React from "react";

export const StatusBadge = ({ status }) => {
  const config = {
    New: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200/60",
      dot: "bg-blue-500",
    },
    Contacted: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200/60",
      dot: "bg-amber-500",
    },
    "Follow-up": {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200/60",
      dot: "bg-purple-500",
    },
    Converted: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200/60",
      dot: "bg-emerald-500",
    },
    Lost: {
      bg: "bg-rose-50",
      text: "text-rose-700",
      border: "border-rose-200/60",
      dot: "bg-rose-500",
    },
  };

  const style = config[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${style.bg} ${style.text} ${style.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></span>
      {status}
    </span>
  );
};
