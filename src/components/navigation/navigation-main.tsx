import { Gamepad } from "lucide-react";
import { NavLink } from "react-router-dom";

import { type NavItem, siteConfig } from "@/configuration/site";
import { cn } from "@/lib/utils";

interface NavigationMainProperties {
  items?: NavItem[];
}

export function NavigationMain({ items }: NavigationMainProperties) {
  return (
    <div className="flex gap-6 md:gap-10">
      <a href="/" className="flex items-center space-x-2">
        <Gamepad></Gamepad>
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </a>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      { underline: isActive },
                      { "cursor-not-allowed opacity-80": item.disabled },
                    )
                  }
                >
                  {item.title}
                </NavLink>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
