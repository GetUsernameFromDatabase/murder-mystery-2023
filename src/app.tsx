import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SiteHeader } from "./components/site-header";
import { mainRoutes } from "./configuration/router";

function App() {
  return (
    <BrowserRouter>
      <main>
        <SiteHeader></SiteHeader>
        <Routes>
          {mainRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
