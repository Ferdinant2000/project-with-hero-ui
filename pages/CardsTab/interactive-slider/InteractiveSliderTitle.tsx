import SecurityLevelSlider from '@/pages/CardsTab/interactive-slider/slider-level/SecurityLevelSlider'
export default function App() {
    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Interactive Security Level Slider</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Adjust the security level to see how different firewall configurations affect network traffic, performance, and security.</p>
            </div>
            <SecurityLevelSlider />
        </>
    );
}