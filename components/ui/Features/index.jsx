import Image from "next/image"
import SectionWrapper from "../../SectionWrapper"

const Features = () => {

    const features = [
        {
            icon: 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>,
            title: "Personalized Recommendations",
            desc: "Our smart algorithms suggest properties that match your unique preferences, saving you time and effort."
        },
        {
            icon:
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-tabs"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M15 2v20"/><path d="M15 7h5"/><path d="M15 12h5"/><path d="M15 17h5"/></svg>,     
            title: "Verified Listings",
            desc: "All properties are thoroughly verified to ensure you receive accurate and trustworthy information."
        },
        {
            icon:
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pinned"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>,
            title: "Seamless Buying and Selling Process",
            desc: "From financing to closing, we simplify every step to help you achieve your real estate goals with confidence."
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features