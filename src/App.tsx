// import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MainContents from "./pages/mainContents";
import PageNotFound from "./components/PageNotFound";
import { darkTheme, lightTheme } from "./style/theme";
import { useEffect, useState } from "react";
import { DarkModeProvider } from "./hooks/useDarkMode";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <MainContents /> },
      {
        path: "profiles",
        element: <Profile />
      },
      {
        path: "profiles/:userid",
        element: <ProfilePage />
      },
      { path: "profiles/:userid/edit", element: <ProfileEdit /> },
      {
        path: "chat",
        element: <Chat />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

function App() {
  const [isDarkMode, setisDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = window.localStorage.getItem("isDarkMode");
    if (storedMode) {
      setisDarkMode(storedMode === "true");
    }
  }, []);

  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <DarkModeProvider>
      <Wrapper>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Wrapper>
    </DarkModeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;
