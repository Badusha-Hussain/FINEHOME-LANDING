import SectionWrapper from "../../SectionWrapper"

const Testimonials = () => {

    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Emma R",
            title: "Marketing Manager",
            quote: "Finding my dream home was a breeze thanks to this platform! The personalized recommendations were spot-on, and the verified listings gave me complete peace of mind."
        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "James T.",
            title: "Software Engineer",
            quote: "I was able to sell my property faster than I ever imagined. The seamless process and professional guidance made the experience stress-free and enjoyable."
        },
        {
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            name: "Sophia L.",
            title: "Interior Designer",
            quote: "The user-friendly interface and detailed property insights were exactly what I needed. I felt informed and confident throughout the entire process."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Liam K.",
            title: "Financial Analyst",
            quote: "I loved how the platform catered to my specific preferences. I found a beautiful apartment in just a week. Truly a game-changer in real estate!"
        },
        {
            avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            name: "Isabella M",
            title: "School Teacher",
            quote: "As a first-time homebuyer, I was nervous, but the step-by-step guidance and excellent customer support made it so easy. Highly recommended!"
        },
        {
            avatar: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Noah W.",
            title: "Entrepreneur",
            quote: "From the verified listings to the effortless transaction process, this service exceeded my expectations. I’ll definitely be back for future needs!"
        },
    ]

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Why Our Customers Love Us
                    </h2>
                    <p className="mt-3 text-gray-600">
                    Hear from homeowners, renters, and sellers about their seamless experiences with Aqary Investment.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white border p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-14 h-14 object-cover rounded-full" alt={item.name} />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials