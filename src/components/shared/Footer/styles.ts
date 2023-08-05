'use client';
import styled from 'styled-components';

export const StyledWrapper = styled.footer`
  background: var(--gray-3);
  padding: 5em 0;
  padding-bottom: 2em;
`;

export const StyledFooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    font-family: var(--font-allura);
    text-transform: capitalize;
    width: 32%;
    text-align: center;
    font-size: 3.2em;
    line-height: 0.9;
  }

  p{
    width: 40%;
    text-align: center;
    font-family: var(--font-raleway);
    margin: 1em 0;
    line-height: 1.5;
    font-weight: 200;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    background: var(--gray-1);
    width: 18%;
    margin-top: 1em;
    padding: 0.5em;
    text-decoration: none;
    font-size: 1.6em;
    color: var(--black);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;


    span{
      &:first-child{
        font-family: var(--font-allura);
        text-transform: capitalize;
      }

      &:last-child{
        margin-top: 0.25em;
      }
    }
  }
`;

export const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3em;

`;

export const StyledCopyright = styled.p`
  font-family: var(--font-raleway);
  font-weight: 200;
`;

export const StyledSocialMediaIcons = styled.ul`
  display: flex;
  gap: 0.5em;
  list-style: none;
`;

export const StyledSocialMediaIcon = styled.li`
  a{
    font-size: 1.5em;
    color: var(--black);
  }
`;