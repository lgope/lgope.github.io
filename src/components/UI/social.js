import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Email = styled.a`
  
  color: #127eb1;
  font-size: 1.8rem;
  position: relative;
  font-weight: 500;
  text-decoration: none;
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 2px;
  transition: color 0.2s ease-out;

  &:hover {
    color: #bd11d4;
    transform: translateY(-2px);
    text-decoration: underline;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.8rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.4rem;
  }
`;

// color: #000;
// border: 2px solid #fff;
// border-radius: 10px;

// &::after {
//   background: #fff;
// }

// &:hover {
//   color: #127EB1;
//   text-decoration: none;

//   &::after {
//     width: 100%;
//   }
// }

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  @media ${props => props.theme.mediaQueries.medium} {
    margin-bottom: 8rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    margin-bottom: 6rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-light);
  margin: 0 1.5rem;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: var(--primary);
    border-color: var(--primary);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 4rem;
    height: 4rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1rem;
    border: 1px solid var(--primary-light);
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    width: 3rem;
    height: 3rem;
    margin: 0 0.8rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--text-highlight);
  font-size: 2.2rem;
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: var(--background);
  }

  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.6rem;
  }
`;

const Social = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            instagram
            linkedin
            github
            email
          }
        }
      }
    }
  `);

  return (
    <>
      <Email href={`mailto:${site.siteMetadata.social.email}`}>
        {/* {site.siteMetadata.social.email} */}
        Let's Talk
      </Email>
      <SocialWrapper>
        <StyledLink
          rel='noreferrer'
          target='_blank'
          aria-label='Github'
          href={`https://github.com/${site.siteMetadata.social.github}`}
        >
          <StyledIcon icon={faGithub} />
        </StyledLink>
        <StyledLink
          rel='noreferrer'
          target='_blank'
          aria-label='Linkedin'
          href={`https://www.linkedin.com/in/${site.siteMetadata.social.linkedin}`}
        >
          <StyledIcon icon={faLinkedinIn} />
        </StyledLink>
        <StyledLink
          rel='noreferrer'
          target='_blank'
          aria-label='Instagram'
          href={`https://www.instagram.com/${site.siteMetadata.social.instagram}`}
        >
          <StyledIcon icon={faInstagram} />
        </StyledLink>
        <StyledLink
          rel='noreferrer'
          target='_blank'
          aria-label='Twitter'
          href={`https://www.twitter.com/${site.siteMetadata.social.twitter}`}
        >
          <StyledIcon icon={faTwitter} />
        </StyledLink>
      </SocialWrapper>
    </>
  );
};

export default Social;
