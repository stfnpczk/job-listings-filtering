import styled from 'styled-components';
import Image from 'next/image';
import bgImgMobile from '../../public/bg-header-mobile.svg';
import bgImgDesktop from '../../public/bg-header-desktop.svg';
import { sizes } from '../styling/Globals';

const HeaderStyles = styled.header`
  background-color: var(--darkCyan);
  position: relative;
  width: 100vw;
  height: 9.75rem;

  .backgroudImageMobile {
    display: block;

    @media (min-width: ${sizes.desktop}) {
      display: none;
    }
  }

  .backgroundImageDesktop {
    display: none;

    @media (min-width: ${sizes.desktop}) {
      display: block;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Image
        className='backgroudImageMobile'
        src={bgImgMobile}
        style={{
          objectFit: 'cover',
          objectPosition: 'top center',
        }}
        sizes='23.4375rem'
        fill
        priority='true'
        alt='background image mobile'
      />

      <Image
        className='backgroundImageDesktop'
        src={bgImgDesktop}
        sizes='90rem'
        fill
        style={{
          objectPosition: 'right',
        }}
        priority='true'
        alt='background image desktop'
      />
    </HeaderStyles>
  );
}
