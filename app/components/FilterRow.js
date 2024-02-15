import styled from 'styled-components';
import Image from 'next/image';
import removeIcon from '../../public/icon-remove.svg';
import { sizes } from '../styling/Globals';

const FilterRowStyles = styled.div`
  background-color: var(--white);
  padding: 1.25rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.9375rem 1.25rem -0.3125rem rgba(13, 113, 130, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -3.75rem 0;
  line-height: 2rem;

  @media (min-width: ${sizes.desktop}) {
    padding: 1.25rem 2.5rem;
    margin: -6.125rem 0;
  }

  &.filterBarInvisible {
    visibility: hidden;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .tagContainer {
    display: flex;
    align-items: center;
    background-color: var(--lightCyanFilter);
  }

  .tagValue {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.0075rem;
    color: var(--cyan);
    padding: 0 0.625rem;
  }

  .removeButtonContainer {
    display: flex;
    align-items: center;
    background-color: var(--cyan);
    height: 100%;
    padding: 0.5625rem;
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      background-color: var(--black);
    }
  }
`;

const ClearButton = styled.button`
  color: var(--darkGray);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.0075rem;
  transition: color 0.3s ease-in;
  margin-left: 0.75rem;

  &:hover {
    cursor: pointer;
    color: var(--cyan);
    text-decoration: underline;
    text-decoration-thickness: 0.0313rem;
  }
`;

export default function FilterRow({ filters, setFilters, clearAllFilters }) {
  return (
    <FilterRowStyles
      className={`${filters.length === 0 ? 'filterBarInvisible' : ''} `}
    >
      <Tags>
        {filters.map((tag, index) => (
          <div className='tagContainer' key={index}>
            <span className='tagValue'> {tag}</span>
            <button
              className='removeButtonContainer'
              value={tag}
              onClick={() => {
                setFilters(filters.filter((f) => f !== tag));
              }}
            >
              <Image
                src={removeIcon}
                width={13.5}
                height={13.5}
                className='removeIcon'
                alt={`remove ${tag} filter`}
              />
            </button>
          </div>
        ))}
      </Tags>
      <ClearButton onClick={clearAllFilters}>Clear</ClearButton>
    </FilterRowStyles>
  );
}
