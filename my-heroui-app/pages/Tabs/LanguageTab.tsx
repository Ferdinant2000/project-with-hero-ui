import {Tabs, Tab} from "@heroui/react";

export default function App() {
  return (
    <div className="flex flex-wrap border-1 border-red justify-center my-30 gap-4">
        <Tabs aria-label="Tabs colors" color="primary" radius="sm" size="lg">
          <Tab key="eng" title="English" />
          <Tab key="jap" title="Japan" />
        </Tabs>
    </div>
  );
}
