import styled from 'styled-components';
import JobItem from './JobItem';
import { sizes } from '../styling/Globals';
const JobListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 5.75rem 0 0;
  margin: 6.875rem 0 0;

  @media (min-width: ${sizes.desktop}) {
    margin: 9.375rem 0 0;
  }
`;

export default function JobList({ jobs, toggleFilter, filters }) {
  return (
    <JobListStyles>
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          toggleFilter={toggleFilter}
          filters={filters}
        />
      ))}
    </JobListStyles>
  );
}
