import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Details from "./Details";
import Copilot from "./Copilot";

const Panel = () => {
  return (
    <div className="hide-scrollbar relative h-screen flex-2 overflow-y-scroll bg-gray-50 dark:bg-neutral-950">
      <Tabs defaultValue="aicopilot" className="w-full">
        <div className="sticky top-0 right-0 left-0 z-10 border-b-3 border-gray-200 bg-white dark:border-gray-950 dark:bg-neutral-900">
          <TabsList className="border-b border-gray-200 px-8">
            <TabsTrigger value="aicopilot" className="text-md">
              {/* <Store /> */}
              AI Copilot
            </TabsTrigger>
            <TabsTrigger value="details" className="text-md">
              Details
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="aicopilot" className="h-screen w-full bg-red-200">
          <Copilot />
        </TabsContent>
        <TabsContent value="details">
          <Details />
        </TabsContent>
      </Tabs>
      {/* <div className="absolute bottom-0 left-0 h-screen w-full bg-gradient-to-b from-transparent to-gray-200 bg-blend-multiply"></div> */}
    </div>
  );
};

export default Panel;
