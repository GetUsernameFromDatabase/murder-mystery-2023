import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SiteHeader } from "./components/site-header";
import { ThemeProvider } from "./components/theme/theme-provider";
import { mainRoutes } from "./configuration/router";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <main>
          <SiteHeader></SiteHeader>
          <Routes>
            {mainRoutes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
