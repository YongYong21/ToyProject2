// import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MainContents from "./pages/mainContents";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import PageNotFound from "./components/PageNotFound";
import { theme } from "./style/theme";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <MainContents /> },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "chat",
        element: <Chat />
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleMode = () => setIsDarkMode((prevMode) => !prevMode);
  // const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;
