import styled from 'styled-components';
import { darken } from 'polished';

import pattern from '../../assets/love-pattern.jpg';

export const MagazineContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${pattern});

  button {
    margin: 16px;
    padding: 6px;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #FF6B6B;
    font-family: 'Lato', sans-serif;
    color: #F7FFF7;
    cursor: pointer;
    transition: .1s;

    &:hover {
      background-color: ${darken('0.04', '#FF6B6B')};
    }
  }
`;

export const PageContainer = styled.section`
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* column-gap: 16px; */
  background-color: #FF6B6B;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PageWrapper = styled.div`
  width: 100%;
  height: 600px;
  max-height: 100%;
  padding: 32px;
  overflow: auto;

  strong {
    display: block;
    margin-bottom: 32px;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: #FFE66D;
  }

  p {
    color: #fff;
    line-height: 1.4rem;

    + p {
      margin-top: 16px;
    }
  }

  blockquote {
    display: block;
    margin-top: 30px;
    color: #fff;
  }

  cite {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #fff;

    &::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 2px;
      margin-right: 5px;
      background-color: #fff;
    }
  }
`

export const RiskedText = styled.span`
  text-decoration: line-through;
  opacity: .5;
`

export const Proposal = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F7FFF7;

  h1 {
    color: #FF6B6B;
  }
`
