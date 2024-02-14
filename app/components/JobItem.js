import styled from 'styled-components';
import Image from 'next/image';
import { sizes } from '../styling/Globals';

const JobItemStyles = styled.li`
  background-color: var(--white);
  position: relative;
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 0.3125rem;
  box-shadow: 0 0.9375rem 1.25rem -0.3125rem rgba(13, 113, 130, 0.15);

  @media (min-width: ${sizes.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2.5rem;
  }

  &.featuredContainer {
    border-left: solid var(--cyan) 0.3125rem;
  }

  .companyLogo {
    position: absolute;
    top: -1.5rem;

    @media (min-width: ${sizes.desktop}) {
      position: unset;
      top: unset;
      width: 5.5rem;
      height: 5.5rem;
    }
  }
`;

const JobContainer = styled.div`
  @media (min-width: ${sizes.desktop}) {
    display: flex;
    gap: 1.5rem;
  }
`;

const JobFeatures = styled.div`
  margin: 0 0 1.25rem;

  .companyName {
    color: var(--cyan);
    font-size: 0.8125rem;
    font-weight: 700;
    margin-right: 1.75rem;

    @media (min-width: ${sizes.desktop}) {
      font-size: 1.125rem;
    }
  }

  .features {
    color: var(--white);
    border-radius: 0.75rem;
    padding: 0.5rem;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: -0.0069rem;

    @media (min-width: ${sizes.desktop}) {
      font-size: 0.875rem;
    }
  }

  .new {
    background-color: var(--cyan);
    margin: 0 0.4375rem 0 0;
  }

  .featured {
    background-color: var(--black);
  }
`;

const JobPosition = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: var(--black);
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
    color: var(--cyan);
  }

  @media (min-width: ${sizes.desktop}) {
    font-size: 1.375rem;
  }
`;

const JobSpecifics = styled.div`
  margin: 0.75rem 0 0;
  border-bottom: solid 0.0625rem var(--gray);
  padding: 0 0 1.1875rem;

  @media (min-width: ${sizes.desktop}) {
    border-bottom: none;
    padding: 0;
  }

  .specifics {
    font-size: 1rem;
    letter-spacing: -0.0075rem;
    color: var(--darkGray);

    @media (min-width: ${sizes.desktop}) {
      font-size: 1.125rem;
      letter-spacing: -0.0088rem;
    }
  }

  .bullet {
    color: var(--gray);
    margin: 0 0.625rem 0 0.625rem;
  }
`;

const JobTags = styled.div`
  margin: 1rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: ${sizes.desktop}) {
    margin: unset;
  }

  .tag {
    color: var(--cyan);
    background-color: rgba(92, 165, 165, 0.1);
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.0075rem;
    border-radius: 0.25rem;
    transition: all 0.4s ease-in;

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: var(--cyan);
        color: var(--white);
      }
    }
  }

  .highlightedTag {
    color: var(--white);
    background-color: var(--cyan);
  }
`;

export default function JobItem(props) {
  const {
    job: {
      company,
      logo,
      isNew,
      featured,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
    },
    toggleFilter,
    filters,
  } = props;

  const tags = [role, level, ...languages, ...tools];

  return (
    <JobItemStyles className={`${featured ? 'featuredContainer' : ''} `}>
      <JobContainer>
        <Image
          src={logo}
          className='companyLogo'
          width={48}
          height={48}
          alt={`company logo of ${company}`}
        />
        <div>
          <JobFeatures>
            <span className='companyName'>{company}</span>
            {isNew && <span className='features new'>NEW!</span>}
            {featured && <span className='features featured'>FEATURED</span>}
          </JobFeatures>
          <JobPosition>{position}</JobPosition>
          <JobSpecifics>
            <span className='specifics posted'>{postedAt} </span>
            <span className='specifics contract'>
              <span className='bullet'>•</span> {contract}
            </span>
            <span className='specifics location'>
              <span className='bullet'>•</span> {location}
            </span>
          </JobSpecifics>
        </div>
      </JobContainer>
      <JobTags>
        {tags.map((tag, index) => (
          <button
            className={` tag ${filters.includes(tag) ? 'highlightedTag' : ''} `}
            key={index}
            value={tag}
            onClick={toggleFilter}
          >
            {tag}
          </button>
        ))}
      </JobTags>
    </JobItemStyles>
  );
}
