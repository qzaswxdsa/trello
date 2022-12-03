import AuthorizationApp from "./authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<AuthorizationApp />} />
          <Route exact path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
