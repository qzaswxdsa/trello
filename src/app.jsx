import AuthorizationApp from "./authorization";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./main";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<AuthorizationApp />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/trello" element={<Navigate to="/#/logIn" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
