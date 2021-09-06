import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GitContextProvider } from "./context/gitHubContext";

import { LoginPage } from "./pages/login/login";
import { Home } from "./pages/home/home";
import { QueryPage } from "./pages/queryUser";
import styled from "styled-components";

const Main = styled.main`
  height: 100vh;
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
  background-color: #fefefe;
`;

const Title = styled.h1`
  align-self: center;
`;

export function App() {
  return (
    <Router>
      <GitContextProvider>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/query/:id" exact component={QueryPage} />
      </GitContextProvider>
    </Router>
  );
}
