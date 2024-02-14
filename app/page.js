'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import FilterRow from './components/FilterRow';
import { JOBS } from './data/data';

export default function Page() {
  const [filters, setFilters] = useState([]);

  const filterJobs = (filters) => {
    const isInList = (jobTagList) =>
      filters.every((f) => jobTagList.includes(f));

    const filteredJobs = JOBS.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

      return isInList(jobTags);
    });

    return filteredJobs;
  };

  const toggleFilter = (e) => {
    e.preventDefault();
    const clickedFilter = e.target.value;

    if (!filters.includes(clickedFilter)) {
      setFilters([...filters, clickedFilter]);
    } else {
      setFilters(filters.filter((f) => f !== clickedFilter));
    }
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  let filteredJobs;
  filters.length > 0
    ? (filteredJobs = filterJobs(filters))
    : (filteredJobs = JOBS);

  return (
    <React.Fragment>
      <Header />
      <main>
        <FilterRow
          filters={filters}
          setFilters={setFilters}
          clearAllFilters={clearAllFilters}
        />

        <JobList
          jobs={filteredJobs}
          toggleFilter={toggleFilter}
          filters={filters}
        />
      </main>
    </React.Fragment>
  );
}
