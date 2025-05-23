import React from "react";

import {
  Bookmark,
  Smile,
  PencilLine,
  DownloadIcon,
  Paperclip,
  Star,
  ImagePlay,
  ArrowUp,
  ArrowDown,
  CornerDownLeft,
  Undo2,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function SuperCommand() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command className="rounded-lg border shadow-md md:min-h-[400px] md:min-w-[400px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-hidden">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="">
            <CommandItem>
              <PencilLine />
              <span className="font-medium text-gray-500">Write a note</span>
              <CommandShortcut>N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Bookmark />
              <span className="font-medium text-gray-500">Use macro</span>
              <CommandShortcut>\</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span className="font-medium text-gray-500">
                Summarize conversation
              </span>
              <CommandShortcut>⌘ Y</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <DownloadIcon />
              <span className="font-medium text-gray-500">
                Create a back-office ticket
              </span>
              <CommandShortcut>z</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Star />
              <span className="font-medium text-gray-500">Snooze</span>
              <CommandShortcut>⌘ A</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Paperclip />
              <span className="font-medium text-gray-500">
                Upload attachment
              </span>
              <CommandShortcut>⌘ C</CommandShortcut>
            </CommandItem>
            <CommandItem className="pb-2">
              <ImagePlay />
              <span className="font-medium text-gray-500">Insert gif</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />

          {/* <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
        {/* BOTTOM LEGEND  */}
        <div className="mt-2 flex items-center gap-2 p-4">
          <Button variant="outline" size="xs">
            <ArrowUp className="font-xs h-4 w-4 text-gray-400" />
          </Button>
          <Button variant="outline" size="xs">
            <ArrowDown className="font-xs h-4 w-4 text-gray-400" />
          </Button>
          <span className="text-xs text-gray-400">to navigate</span>
          <Button variant="outline" size="xs">
            <CornerDownLeft className="font-xs h-4 w-4 text-gray-400" />
          </Button>
          <span className="text-xs text-gray-400">to select</span>
          <Button variant="outline" size="xs">
            <Undo2 className="font-xs h-4 w-4 text-gray-400" />
          </Button>
          <span className="text-xs text-gray-400">to close</span>
        </div>
      </Command>
    </CommandDialog>
  );
}
