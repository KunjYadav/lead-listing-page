import React, { useState, useMemo } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import { mockLeads, STATUSES } from "./data/mockData";
import { SummaryCards } from "./components/SummaryCards";
import { SearchInput } from "./components/SearchInput";
import { SelectDropdown } from "./components/SelectDropdown";
import { EmptyState } from "./components/EmptyState";
import { DesktopLeadTable } from "./components/DesktopLeadTable";
import { MobileLeadCard } from "./components/MobileLeadCard";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const processedLeads = useMemo(() => {
    let filtered = mockLeads.filter((lead) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        lead.name.toLowerCase().includes(searchLower) ||
        lead.email.toLowerCase().includes(searchLower) ||
        lead.company.toLowerCase().includes(searchLower);

      const matchesStatus =
        statusFilter === "All" || lead.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    if (sortBy === "name") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "status") {
      filtered = filtered.sort(
        (a, b) => STATUSES.indexOf(a.status) - STATUSES.indexOf(b.status),
      );
    }

    return filtered;
  }, [searchQuery, statusFilter, sortBy]);

  return (
    <div className='min-h-screen bg-[#F8FAFC] p-6 md:p-10 font-sans text-slate-800'>
      <div className='max-w-7xl mx-auto space-y-8'>
        {/* Header Section */}
        <div className='pb-2 space-y-2'>
          <h1 className='text-4xl font-extrabold text-slate-900 tracking-tight'>
            Lead Dashboard
          </h1>
          <p className='text-slate-500 text-lg'>
            Manage and track your incoming business opportunities.
          </p>
        </div>

        {/* Summary Metrics */}
        <SummaryCards leads={mockLeads} />

        {/* Filters and Controls */}
        <div className='bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col md:flex-row gap-4 md:gap-5'>
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className='flex flex-row gap-3 md:gap-5 w-full md:w-auto'>
            <SelectDropdown
              icon={Filter}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              defaultOption={{ value: "All", label: "All Statuses" }}
              options={STATUSES.map((s) => ({ value: s, label: s }))}
            />

            <SelectDropdown
              icon={ArrowUpDown}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              defaultOption={{ value: "", label: "Sort By..." }}
              options={[
                { value: "name", label: "Name (A-Z)" },
                { value: "status", label: "Status Priority" },
              ]}
            />
          </div>
        </div>

        {/* Main Content Area */}
        {processedLeads.length === 0 ? (
          <EmptyState
            onClear={() => {
              setSearchQuery("");
              setStatusFilter("All");
              setSortBy("");
            }}
          />
        ) : (
          <>
            <DesktopLeadTable leads={processedLeads} />

            <div className='md:hidden space-y-4'>
              {processedLeads.map((lead) => (
                <MobileLeadCard key={lead.id} lead={lead} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
