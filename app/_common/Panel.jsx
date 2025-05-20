import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Store } from "lucide-react";

const Panel = () => {
  return (
    <div className="h-screen flex-2">
      <Tabs defaultValue="aicopilot" className="">
        <TabsList>
          <TabsTrigger value="aicopilot" className="text-md">
            {/* <Store /> */}
            AI Copilot
          </TabsTrigger>
          <TabsTrigger value="details" className="text-md">
            Details
          </TabsTrigger>
        </TabsList>
        <TabsContent value="aicopilot">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="details">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Panel;
