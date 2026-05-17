import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const experiences = [
    {
        icon: "🧖",
        title: "Spa & Wellness",
        description: "Rejuvenate your body and mind with world-class spa treatments, thermal baths, and holistic wellness programs at our partner resorts."
    },
    {
        icon: "🍽️",
        title: "Fine Dining",
        description: "Savor exquisite cuisines crafted by Michelin-starred chefs. From rooftop dining to beachside feasts, every meal is an event."
    },
    {
        icon: "🏔️",
        title: "Adventure Tours",
        description: "From desert safaris in Dubai to helicopter rides over Manhattan — experience heart-pumping adventures curated just for you."
    },
    {
        icon: "🎭",
        title: "Cultural Immersion",
        description: "Explore local heritage with private museum tours, cooking classes, and guided walks through historic neighborhoods."
    },
    {
        icon: "🚗",
        title: "Private Transfers",
        description: "Travel in style with luxury chauffeur services, private yacht charters, and helicopter transfers between destinations."
    },
    {
        icon: "🛎️",
        title: "Personal Concierge",
        description: "Your dedicated concierge handles everything — from restaurant reservations to surprise celebrations and bespoke itineraries."
    }
]

const featuredExperiences = [
    {
        title: "Sunset Yacht Cruise in Dubai",
        location: "Dubai Marina",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000",
        description: "Sail across the Arabian Gulf as the sun dips behind the skyline. Includes gourmet dinner and live music."
    },
    {
        title: "Private Garden Tea in London",
        location: "Kensington Palace Gardens",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000",
        description: "An intimate afternoon tea experience in one of London's most exclusive private gardens."
    },
    {
        title: "Rooftop Stargazing in Singapore",
        location: "Marina Bay Sands",
        image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=1000",
        description: "Gaze at the stars from 57 floors up with a personal astronomer and champagne service."
    }
]

const steps = [
    { number: "01", title: "Browse Experiences", description: "Explore our curated collection of premium experiences across all destinations." },
    { number: "02", title: "Book Seamlessly", description: "Reserve your experience with instant confirmation and flexible cancellation." },
    { number: "03", title: "Live the Moment", description: "Arrive and enjoy — every detail is handled by our dedicated experience team." }
]

const Experience = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative flex items-center justify-center text-white bg-no-repeat bg-cover bg-center h-[60vh] md:h-[70vh]"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600')` }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6 animate-fadeIn">
                    <p className='bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm inline-block mb-4'>Premium Experiences</p>
                    <h1 className="font-playfair text-4xl md:text-6xl font-bold max-w-3xl">Curated Experiences That Define Luxury</h1>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Go beyond accommodation. Discover handpicked experiences that transform your stay into an unforgettable journey.</p>
                </div>
            </div>

            {/* Experience Categories */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
                <Title title="What We Offer" subTitle="Every experience is thoughtfully curated to complement your stay and create memories that last a lifetime." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {experiences.map((exp, i) => (
                        <div key={i} className="group bg-white rounded-xl p-8 shadow-[0px_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl mb-4">{exp.icon}</div>
                            <h3 className="font-playfair text-xl font-medium text-gray-800">{exp.title}</h3>
                            <p className="text-gray-500/90 mt-3 text-sm leading-relaxed">{exp.description}</p>
                            <button className="flex items-center gap-2 mt-5 text-sm font-medium text-gray-800 group-hover:gap-3 transition-all">
                                Learn More
                                <img src={assets.arrowIcon} alt="arrow" className="w-3" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works */}
            <div className="bg-[#F6F9FC] px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
                <Title title="How It Works" subTitle="Booking a premium experience with QuickStay is simple, seamless, and always memorable." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                    {steps.map((step, i) => (
                        <div key={i} className="relative text-center md:text-left">
                            <span className="font-playfair text-6xl font-bold text-primary/10">{step.number}</span>
                            <h3 className="font-playfair text-xl font-medium text-gray-800 mt-2">{step.title}</h3>
                            <p className="text-gray-500/90 mt-3 text-sm leading-relaxed">{step.description}</p>
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 -right-5 text-gray-300 text-3xl">→</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Experiences */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
                <Title title="Featured Experiences" subTitle="Signature experiences handpicked by our travel experts for the most discerning guests." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {featuredExperiences.map((exp, i) => (
                        <div key={i} className="group relative rounded-xl overflow-hidden h-96 cursor-pointer">
                            <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <p className="text-xs text-white/70 uppercase tracking-wider">{exp.location}</p>
                                <h3 className="font-playfair text-xl font-medium mt-1">{exp.title}</h3>
                                <p className="text-sm text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 pb-30">
                <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-auto bg-gray-900 text-white">
                    <Title title="Ready to Explore?" subTitle="Let us craft the perfect experience for your next trip. Every moment is designed to delight." />
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                        <input type="text" className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full" placeholder="Enter your email" />
                        <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
                            Get Started
                            <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert group-hover:translate-x-1 transition-all' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
