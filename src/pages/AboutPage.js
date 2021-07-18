import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/home1.jpg'

const AboutPage = () => {
  return (
  <main>
    <PageHero title="about"/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="mask"/>
      <article>
        <div className='title'>
          <h2>Protect</h2>
          <div className='underline'></div>
        </div>
        <p>
          Stopping the spread starts with you. Gear up yourselves and protect. 
          <li>Clean your hands often. Use soap and water, or sanitizer.</li>
          <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
          <li>Wear a mask when physical distancing is not possible</li>
          <li>Don’t touch your eyes, nose or mouth.</li>
          <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
          <li>Stay home if you feel unwell</li>
          <li>If you have a fever, cough and difficulty breathing, seek medical attention.</li>
        </p>
      </article>
    </Wrapper>
  </main>
  )}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
