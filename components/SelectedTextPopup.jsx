import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  BrainCog,
  Bold,
  Italic,
  Code,
  Link,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react";
import { Separator } from "./ui/separator";

const SelectedTextPopup = () => {
  return (
    <Menubar>
      {/* 1st ITEM  */}
      <MenubarMenu className="b-0">
        <MenubarTrigger>
          <BrainCog className="h-4 w-4 cursor-pointer" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Rephrase <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />

          <MenubarItem>My tone of voice</MenubarItem>
          <MenubarItem>More friendly</MenubarItem>
          <MenubarItem>More formal</MenubarItem>
          <MenubarItem>Fix grammar and spelling</MenubarItem>
          <MenubarItem>Translate...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      {/* SEPARATOR */}
      <Separator orientation="vertical" />
      {/* 2nd ITEM  */}
      <MenubarMenu>
        <MenubarTrigger>
          <Bold className="h-4 w-4 cursor-pointer" />
        </MenubarTrigger>
      </MenubarMenu>
      {/* 3rd ITEM  */}
      <MenubarMenu>
        <MenubarTrigger>
          <Italic className="h-4 w-4 cursor-pointer" />
        </MenubarTrigger>
      </MenubarMenu>
      {/* 4th ITEM  */}
      <MenubarMenu>
        <MenubarTrigger>
          <Code className="h-4 w-4 cursor-pointer" />
        </MenubarTrigger>
      </MenubarMenu>
      {/* 5th ITEM  */}
      <MenubarMenu>
        <MenubarTrigger>
          <Link className="h-4 w-4 cursor-pointer" />
        </MenubarTrigger>
      </MenubarMenu>

      {/* SEPARATOR */}
      <Separator orientation="vertical" />
      {/* 6th ITEM  */}
      <MenubarMenu>
        <MenubarTrigger>
          <Heading1 className="h-4 w-4 cursor-pointer" />
        </MenubarTrigger>
      </MenubarMenu>
      {/* 7th ITEM  */}
      <MenubarMenu>
        <MenubarTrigger>
          <Heading2 className="h-4 w-4 cursor-pointer" />
        </MenubarTrigger>
      </MenubarMenu>
      {/* 8th ITEM  */}
      <MenubarMenu>
        <MenubarTrigger>
          <Heading3 className="h-4 w-4 cursor-pointer" />
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default SelectedTextPopup;
