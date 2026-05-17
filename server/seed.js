import mongoose from "mongoose";
import "dotenv/config";
import User from "./models/User.js";
import Hotel from "./models/Hotel.js";
import Room from "./models/Room.js";

const seedDatabase = async () => {
    try {
        console.log("Connecting to database...");
        const dbUri = `${process.env.MONGODB_URI}/hotel-booking`;
        await mongoose.connect(dbUri);
        console.log("Database Connected successfully!");

        // Clear existing collection records
        console.log("Clearing existing collections...");
        await User.deleteMany({});
        await Hotel.deleteMany({});
        await Room.deleteMany({});
        console.log("Collections cleared successfully.");

        // 1. Create a Default Hotel Owner User
        console.log("Creating default owner user...");
        const defaultOwner = new User({
            _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
            username: "Sushant Chothe",
            email: "user.sushantchothe405@gmail.com",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            role: "hotelOwner",
            recentSearchedCities: ["Dubai", "Singapore", "New York", "London"]
        });
        await defaultOwner.save();
        console.log("Default owner user created.");

        // 2. Create Hotels across 4 cities (8 hotels total)
        console.log("Creating hotels...");
        const hotels = [
            // --- New York (2 hotels) ---
            {
                name: "Taj Hotels Mumbai",
                address: "The Taj Mahal Palace Hotel, Apollo Bunder, Mumbai, India",
                contact: "+912266653300",
                owner: defaultOwner._id,
                city: "New York"
            },
            {
                name: "The Plaza New York",
                address: "768 Fifth Avenue, New York, NY 10019, USA",
                contact: "+12127597000",
                owner: defaultOwner._id,
                city: "New York"
            },
            // --- Singapore (2 hotels) ---
            {
                name: "Marina Bay Sands Singapore",
                address: "10 Bayfront Ave, Singapore 018956",
                contact: "+6566888888",
                owner: defaultOwner._id,
                city: "Singapore"
            },
            {
                name: "Raffles Hotel Singapore",
                address: "1 Beach Rd, Singapore 189673",
                contact: "+6563371886",
                owner: defaultOwner._id,
                city: "Singapore"
            },
            // --- Dubai (2 hotels) ---
            {
                name: "Burj Al Arab Luxury Resort",
                address: "Jumeirah St, Dubai, United Arab Emirates",
                contact: "+97143017777",
                owner: defaultOwner._id,
                city: "Dubai"
            },
            {
                name: "Atlantis The Royal Dubai",
                address: "Crescent Rd, Palm Jumeirah, Dubai, UAE",
                contact: "+97144260000",
                owner: defaultOwner._id,
                city: "Dubai"
            },
            // --- London (2 hotels) ---
            {
                name: "The Savoy Hotel London",
                address: "Strand, London WC2R 0EZ, United Kingdom",
                contact: "+442078364343",
                owner: defaultOwner._id,
                city: "London"
            },
            {
                name: "The Ritz London",
                address: "150 Piccadilly, St. James's, London W1J 9BR, UK",
                contact: "+442074938181",
                owner: defaultOwner._id,
                city: "London"
            }
        ];

        const createdHotels = await Hotel.insertMany(hotels);
        console.log(`${createdHotels.length} hotels created successfully.`);

        // 3. Create Rooms (12 rooms total — mix of types and price ranges)
        console.log("Creating rooms...");
        const rooms = [
            // Taj Hotels Mumbai — 2 rooms
            {
                hotel: createdHotels[0]._id,
                roomType: "Double Bed",
                pricePerNight: 399,
                amenities: ["Room Service", "Mountain View", "Pool Access"],
                images: [
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000",
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000",
                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000",
                    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000"
                ],
                isAvailable: true
            },
            {
                hotel: createdHotels[0]._id,
                roomType: "Single Bed",
                pricePerNight: 199,
                amenities: ["Free WiFi", "Room Service"],
                images: [
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000",
                    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000",
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000",
                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000"
                ],
                isAvailable: true
            },
            // The Plaza New York — 1 room
            {
                hotel: createdHotels[1]._id,
                roomType: "Luxury Room",
                pricePerNight: 899,
                amenities: ["Free WiFi", "Free Breakfast", "Room Service", "Pool Access"],
                images: [
                    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000",
                    "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000",
                    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000",
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000"
                ],
                isAvailable: true
            },
            // Marina Bay Sands — 2 rooms
            {
                hotel: createdHotels[2]._id,
                roomType: "Double Bed",
                pricePerNight: 299,
                amenities: ["Room Service", "Pool Access", "Free WiFi"],
                images: [
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000",
                    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000",
                    "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000",
                    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000"
                ],
                isAvailable: true
            },
            {
                hotel: createdHotels[2]._id,
                roomType: "Family Room",
                pricePerNight: 549,
                amenities: ["Free WiFi", "Free Breakfast", "Pool Access", "Room Service"],
                images: [
                    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000",
                    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000",
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000"
                ],
                isAvailable: true
            },
            // Raffles Hotel Singapore — 1 room
            {
                hotel: createdHotels[3]._id,
                roomType: "Luxury Room",
                pricePerNight: 749,
                amenities: ["Free WiFi", "Free Breakfast", "Room Service", "Mountain View"],
                images: [
                    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000",
                    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000",
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000"
                ],
                isAvailable: true
            },
            // Burj Al Arab — 2 rooms
            {
                hotel: createdHotels[4]._id,
                roomType: "Double Bed",
                pricePerNight: 249,
                amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
                images: [
                    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
                    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000",
                    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
                    "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1000"
                ],
                isAvailable: true
            },
            {
                hotel: createdHotels[4]._id,
                roomType: "Luxury Room",
                pricePerNight: 699,
                amenities: ["Free WiFi", "Free Breakfast", "Room Service", "Pool Access", "Mountain View"],
                images: [
                    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000",
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000",
                    "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000",
                    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000"
                ],
                isAvailable: true
            },
            // Atlantis The Royal Dubai — 1 room
            {
                hotel: createdHotels[5]._id,
                roomType: "Family Room",
                pricePerNight: 459,
                amenities: ["Free WiFi", "Pool Access", "Room Service", "Free Breakfast"],
                images: [
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000",
                    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
                    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000",
                    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000"
                ],
                isAvailable: true
            },
            // The Savoy Hotel London — 1 room
            {
                hotel: createdHotels[6]._id,
                roomType: "Single Bed",
                pricePerNight: 199,
                amenities: ["Free WiFi", "Room Service", "Pool Access"],
                images: [
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000",
                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000",
                    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000",
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000"
                ],
                isAvailable: true
            },
            // The Ritz London — 2 rooms
            {
                hotel: createdHotels[7]._id,
                roomType: "Double Bed",
                pricePerNight: 349,
                amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
                images: [
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000",
                    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
                    "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1000",
                    "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1000"
                ],
                isAvailable: true
            },
            {
                hotel: createdHotels[7]._id,
                roomType: "Luxury Room",
                pricePerNight: 799,
                amenities: ["Free WiFi", "Free Breakfast", "Room Service", "Pool Access", "Mountain View"],
                images: [
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000",
                    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000",
                    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000",
                    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000"
                ],
                isAvailable: true
            }
        ];

        await Room.insertMany(rooms);
        console.log(`${rooms.length} rooms created successfully.`);

        console.log("\n🌱 Database Seeded Successfully!");
        console.log(`   Hotels: ${createdHotels.length}`);
        console.log(`   Rooms:  ${rooms.length}`);
        console.log(`   Cities: Dubai, Singapore, New York, London\n`);
        mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error.message);
        mongoose.connection.close();
        process.exit(1);
    }
};

seedDatabase();
