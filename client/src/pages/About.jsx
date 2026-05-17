import React, { useEffect, useState, useRef } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const stats = [
    { value: 500, suffix: "+", label: "Luxury Hotels" },
    { value: 10, suffix: "K+", label: "Happy Guests" },
    { value: 50, suffix: "+", label: "Cities Worldwide" },
    { value: 4.8, suffix: "", label: "Average Rating", isDecimal: true }
]

const values = [
    {
        icon: "🛡️",
        title: "Trust & Safety",
        description: "Every property is personally vetted by our team. We ensure the highest standards of cleanliness, security, and guest satisfaction at every location."
    },
    {
        icon: "✨",
        title: "Luxury Experience",
        description: "From hand-selected amenities to dedicated concierge services, we curate every detail so your stay feels effortlessly premium."
    },
    {
        icon: "🌍",
        title: "Global Reach",
        description: "With properties spanning 50+ cities across 4 continents, your next unforgettable destination is always within reach."
    }
]

const milestones = [
    { year: "2020", event: "QuickStay founded with a vision to redefine hotel booking" },
    { year: "2021", event: "Expanded to 10 cities with 50+ partner hotels" },
    { year: "2022", event: "Launched exclusive experiences and concierge services" },
    { year: "2023", event: "Reached 10,000+ happy guests across 30 countries" },
    { year: "2024", event: "Introduced AI-powered personalized recommendations" },
    { year: "2025", event: "500+ luxury properties across 50+ global destinations" }
]

// Animated counter component
const AnimatedCounter = ({ target, suffix, isDecimal }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const duration = 2000
                    const steps = 60
                    const increment = target / steps
                    let current = 0
                    const timer = setInterval(() => {
                        current += increment
                        if (current >= target) {
                            current = target
                            clearInterval(timer)
                        }
                        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
                    }, duration / steps)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, isDecimal])

    return <span ref={ref}>{count}{suffix}</span>
}

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative flex items-center justify-center text-white bg-no-repeat bg-cover bg-center h-[60vh] md:h-[70vh]"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600')` }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-6 animate-fadeIn">
                    <p className='bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm inline-block mb-4'>Our Story</p>
                    <h1 className="font-playfair text-4xl md:text-6xl font-bold max-w-3xl">About QuickStay</h1>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Redefining luxury travel, one unforgettable stay at a time.</p>
                </div>
            </div>

            {/* Our Story */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-playfair text-3xl md:text-4xl text-gray-800">The Journey Behind QuickStay</h2>
                        <div className="mt-6 space-y-4 text-gray-500/90 leading-relaxed">
                            <p>
                                QuickStay was born from a simple frustration — finding truly exceptional hotels shouldn't require hours of research, unreliable reviews, and hidden fees. We set out to build a platform where every listing is personally vetted, every photo is genuine, and every experience is extraordinary.
                            </p>
                            <p>
                                Starting with just 5 handpicked properties in Mumbai, we've grown into a global network of 500+ luxury hotels across 50+ cities. But our mission remains the same: connect discerning travelers with accommodations that exceed expectations.
                            </p>
                            <p>
                                What sets us apart isn't just our properties — it's our people. Our team of travel experts, local concierges, and hospitality veterans work behind the scenes to ensure every stay feels personal, seamless, and unforgettable.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
                            alt="Luxury hotel pool"
                            className="rounded-xl shadow-lg w-full object-cover h-[400px]"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-[200px] hidden lg:block">
                            <p className="font-playfair text-3xl font-bold text-primary">5+</p>
                            <p className="text-gray-500 text-sm mt-1">Years of redefining luxury travel</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-gray-900 text-white px-6 md:px-16 lg:px-24 xl:px-32 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <p className="font-playfair text-4xl md:text-5xl font-bold">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                            </p>
                            <p className="text-white/60 mt-2 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Values */}
            <div className="bg-[#F6F9FC] px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
                <Title title="Our Values" subTitle="The principles that guide everything we do — from selecting properties to serving our guests." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {values.map((value, i) => (
                        <div key={i} className="bg-white rounded-xl p-8 shadow-[0px_4px_16px_rgba(0,0,0,0.06)] text-center">
                            <div className="text-5xl mb-5">{value.icon}</div>
                            <h3 className="font-playfair text-xl font-medium text-gray-800">{value.title}</h3>
                            <p className="text-gray-500/90 mt-3 text-sm leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Journey / Milestones */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
                <Title title="Our Journey" subTitle="From a small idea to a global platform — here's how we got here." />
                <div className="mt-16 max-w-3xl mx-auto">
                    {milestones.map((m, i) => (
                        <div key={i} className="flex gap-6 mb-8 last:mb-0">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-primary font-bold text-sm">{m.year}</span>
                                </div>
                                {i < milestones.length - 1 && <div className="w-px h-full bg-gray-200 mt-2" />}
                            </div>
                            <div className="pt-2.5">
                                <p className="text-gray-800 font-medium">{m.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Founder Quote */}
            <div className="bg-[#F6F9FC] px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="text-6xl text-primary/20 font-playfair">"</div>
                    <p className="font-playfair text-2xl md:text-3xl text-gray-800 leading-relaxed -mt-4">
                        We don't just book hotels — we craft experiences. Every property in our collection tells a story, and every guest becomes part of it.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100" alt="Founder" className="w-14 h-14 rounded-full object-cover" />
                        <div className="text-left">
                            <p className="font-medium text-gray-800">Sushant Chothe</p>
                            <p className="text-gray-500 text-sm">Founder & CEO, QuickStay</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 pb-30">
                <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-auto bg-gray-900 text-white">
                    <Title title="Join the Journey" subTitle="Be part of a community that values exceptional travel. Subscribe for exclusive access to new destinations and offers." />
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                        <input type="text" className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full" placeholder="Enter your email" />
                        <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">
                            Subscribe
                            <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert group-hover:translate-x-1 transition-all' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
