import React, { Suspense } from "react"
import Link from 'next/link';
import styled from 'styled-components';
import Nav from "./nav";
// nav and logo was not import yet

const FirstNav = styled.div`
background: ${(props) => props.theme.foreground};
width: 100%;
display: flex;
flex-direction: row;
align-items: end;
padding: 0.4rem 2rem;
`


const LogoWrapper = styled.div`
  flex: 1;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: end;
  }

  svg {
    width: 35px;
    height: 35px;
    margin-right: 0.4rem;
  }

  span {
    color: #0065ff;

    @media (max-width: 675px) {
      display: none;
    }
  }
`

const NavWrapper = styled.div`
  width: 77%;

  @media (max-width: 675px) {
    // width: 54%;
    width: 100%;
  }
`

const SecondNav = styled.div`
  background: #fafbfa;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #f4f5f7;
  border-bottom: 1px solid #F4F57;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.normalText};
    font-size: 14px;
  }
`

const SecondNavItem = styled.div`
  display: inline-block;
  margin-right: 1.4rem;
`



const Navbar = () => {
  return (
    <>
      <FirstNav>
        <LogoWrapper>
          <Link href="/">
            <a>
              {/* <Logo /> */}
              <span>Gullah Marketplace</span>
            </a>
          </Link>
        </LogoWrapper>

        <NavWrapper>
          {/* <Suspense fallback="Loading">
          
          </Suspense> */}
          <Nav />
        </NavWrapper>

      </FirstNav>

      <SecondNav>
        <SecondNavItem>
          <a>
            <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">
              🍾 New Releases
            </span>
          </a>
        </SecondNavItem>
        <SecondNavItem>
          <a>
            <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">
              🔥 Hot
            </span>
          </a>
        </SecondNavItem>
      </SecondNav>
    </>
  )
}

export default Navbar;
