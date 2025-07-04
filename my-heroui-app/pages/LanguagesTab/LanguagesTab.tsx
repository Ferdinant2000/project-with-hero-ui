import {Tabs, Tab} from "@heroui/react";

export default function App() {
  return (
    <div className="flex flex-wrap justify-center my-[1.5rem] gap-4">
        <Tabs aria-label="" className="light shadow-lg rounded-xl" color="primary" radius="sm" size="lg">
          <Tab key="eng" title="English" />
          <Tab key="jap" title="Japan" />
        </Tabs>
    </div>
  );
}
