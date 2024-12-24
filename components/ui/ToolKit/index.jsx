import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"
import review from "../../../public/icons/review.svg"
import list from "../../../public/icons/list.svg"

const ToolKit = () => {

    const features = [
        {
            icon: list,
            title: "Extensive Property Listings",
            desc: "Explore thousands of homes, rentals, and commercial spaces tailored to your preferences."
        },
        {
            icon: list,
            title: "Advanced Search Tools",
            desc: "Filter properties by location, price, size, and more to find the perfect match."
        },
        {
            icon: list,
            title: "Neighborhood Insights",
            desc: "Get detailed information about schools, amenities, safety, and community vibes for each listing."
        },
        {
            icon: list,
            title: "Market Analytics",
            desc: "Stay informed with the latest market trends and pricing insights to make confident decisions."
        },
        {
            icon: list,
            title: "24/7 Customer Support",
            desc: "Our dedicated team is here to assist you every step of the way, anytime you need us."
        },
        {
            icon: review,
            title: "Easy Property Listing",
            desc: "List your property with ease and reach potential buyers or renters in no time."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Why Choose Aqary Investment?
                    </h2>
                    <p>
                    We provide everything you need to make your real estate journey smooth, successful, and stress-free.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        <Image src={item.icon} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit