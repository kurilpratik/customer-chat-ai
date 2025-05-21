import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

import { Store, ArrowUp } from "lucide-react";
import Details from "./Details";

const Panel = () => {
  return (
    <div className="relative h-screen flex-2 bg-gray-50">
      <Tabs defaultValue="aicopilot" className="w-full">
        <div className="w-full border-b-3 border-gray-200 bg-white">
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
