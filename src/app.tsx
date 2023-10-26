import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.css";
import { mainRoutes } from "./configuration/router";
import { LayoutMain } from "./layouts/layout-main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          {mainRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
