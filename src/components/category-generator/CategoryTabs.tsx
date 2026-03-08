import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResultTab from "./ResultTab";
import ProductsTab from "./ProductsTab";
import AiLogsTab from "./AiLogsTab";

export default function CategoryTabs() {
  return (
    <Tabs defaultValue="result" className="max-w-160 w-full">
      <TabsList variant="line" className="mb-4 mx-auto">
        <TabsTrigger value="result" className="px-4 md:text-lg">
          Result
        </TabsTrigger>

        <TabsTrigger value="products" className="px-4 md:text-lg">
          Products
        </TabsTrigger>

        <TabsTrigger value="ai_logs" className="px-4 md:text-lg">
          AI Logs
        </TabsTrigger>
      </TabsList>

      <TabsContent value="result">
        <ResultTab />
      </TabsContent>

      <TabsContent value="products">
        <ProductsTab />
      </TabsContent>

      <TabsContent value="ai_logs">
        <AiLogsTab />
      </TabsContent>
    </Tabs>
  );
}
