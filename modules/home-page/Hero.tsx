import Image from 'next/image';

import { Wrapper, ImageWrapper } from './styles/Hero';

const Hero = () => (
  <Wrapper>
    <ImageWrapper>
      <Image
        src='/images/site/vadim.jpg'
        alt='An image of Vadim'
        width={300}
        height={300}
      />
    </ImageWrapper>

    <h1>Hi, I am Vadim</h1>

    <p>
      I blog about web development - especially frontend frameworks like React
      or Vue.
    </p>
  </Wrapper>
);

export default Hero;
