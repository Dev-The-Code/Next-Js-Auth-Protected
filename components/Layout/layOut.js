import React from 'react'
import Head from 'next/head';
import styled, { createGlobalStyle } from "styled-components"
import Navbar from '../Navbar/navBar'
import Link from "next/link";
import { logoutUser } from "../../lib/auth";


const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'IBM Plex Sans', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
  transition: all 0.15s ease;
  transition-property: color, background-color, border;
}
body {
  
  background-color: white;
}
h1, h2, h3, h4 {
  color: black;
}
p {
  color: black;
}
span {
  color: black;
}
button {
  border: 0px;
  cursor: pointer;
  background: transparent;
  &:focus {
    outline: none;
  }
}

input[type=text], input[type=email], input[type=password] {
  padding: 10px;
  border: 1px solid ;
  color: black;
  border-radius: 2px;
}
input[type=date] {
  padding: 10px;
  border: 1px solid ;
  color:black;
  border-radius: 2px;
}
textarea {
  padding: 10px;
  border: 1px solid ;
  color:black;
  border-radius: 2px;
}
`

const FlexContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // height: 100vh;
`
const Wrapper = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  flex: 1 0 auto;
`


const Layout = ({ title, children, auth }) => {
    const { user = {} } = auth || {};

    return (
        <div className="root">
            <Head>
                <title>{title || "Gullah Marketplace"}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <GlobalStyle />

            <FlexContainer>
                <Navbar />

                <Wrapper>
                    <h1>{title}</h1>
                    {children}
                </Wrapper>
            </FlexContainer>
            {/* <nav className="navbar">
                <span>
                    Welcome, <strong>{user.name || "Guest"}</strong>
                </span>

                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>

                    {user.email ? (
                        // Auth Navigation
                        <React.Fragment>
                            <Link href="/profile">
                                <a>Profile</a>
                            </Link>
                            <button onClick={logoutUser}>Logout</button>
                        </React.Fragment>
                    ) : (
                            // UnAuth Navigation
                            <Link href="/login">
                                <a>Login</a>
                            </Link>
                        )}
                </div>
            </nav> */}

            {/* {children} */}

            {/* <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style> */}
        </div>
    );
};

export default Layout;
