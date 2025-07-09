import { Tabs, Tab } from "@heroui/react";
import FirewallBasics from '@/pages/CardsTab/firewall-basics/UnderstandingFirewalls'
import InteractiveSlider from '@/pages/CardsTab/interactive-slider/InteractiveSliderTitle'
export default function App() {
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center mb-8 gap-4">
        <Tabs className="light grid flex-wrap shadow-lg rounded-xl mx-auto justify-center" aria-label="Options" color="primary" radius="sm" size="lg">
          <Tab key="basics" title="Firewall Basics" >
            <FirewallBasics />
          </Tab>
          <Tab key="slider" title="Interactive Slider" >
            <InteractiveSlider />
          </Tab>
          <Tab key="errors" title="Common Errors" />
        </Tabs>
      </div>
    </>
  );
}