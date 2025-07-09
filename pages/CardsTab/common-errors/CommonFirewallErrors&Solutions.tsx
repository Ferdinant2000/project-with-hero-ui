import ErrorCards from './error-options/ErrorCards'
export default function App() {
    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Firewall Errors & Solutions</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Learn about the most common firewall configuration errors, their consequences, and how to prevent or fix them.</p>
            </div>
            <ErrorCards />
        </>
    );
}