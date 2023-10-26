import { NavigationMain } from "./navigation/navigation-main";

import { siteConfig } from "@/configuration/site";

export function SiteHeader() {
  return (
    <div className="grid">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <NavigationMain items={siteConfig.mainNav} />
        </div>
      </header>
    </div>
  );
}
