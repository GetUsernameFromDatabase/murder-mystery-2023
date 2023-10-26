import { Download, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { replaceStoreState, store } from "@/store";

/**
 * USES STORE HOOK
 */
function saveGame() {
  const state = store.getState();
  const stateJSON = JSON.stringify(state);
  const blob = new Blob([stateJSON], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const element = document.createElement("a");
  element.href = url;
  element.download = "murderMystery_save.json";
  element.click();

  URL.revokeObjectURL(url);
}

function loadGame() {
  console.log("LOAD GAME");
  const element = document.createElement("input");
  element.type = "file";
  element.accept = ".json";
  element.addEventListener("change", async () => {
    const file = element.files?.item(0);
    if (!file) return;

    const fileContent = await file.text();
    const savedState = JSON.parse(fileContent);
    replaceStoreState(savedState);
  });
  element.click();
}

export function GameOptions() {
  const title = "Game Options";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => saveGame()}>
            <Save className="mr-2 h-4 w-4" />
            <span>Save Game</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => loadGame()}>
            <Download className="mr-2 h-4 w-4" />
            <span>Load Game</span>
            <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
