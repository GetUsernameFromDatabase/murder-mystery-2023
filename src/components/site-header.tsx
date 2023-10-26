import { NavigationMain } from "./navigation/navigation-main";
import { ModeToggle } from "./theme/mode-toggle";

import { siteConfig } from "@/configuration/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMain items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
  // return (
  //   <div className="grid">
  //     <header className="sticky top-0 z-40 w-full border-b bg-background">
  //       <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
  //         <NavigationMain items={siteConfig.mainNav} />
  //       </div>
  //     </header>
  //   </div>
  // );
}
