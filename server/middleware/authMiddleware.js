import User from "../models/User.js";
import { clerkClient } from "@clerk/express";

//Middleware to check if user is authenticated

export const protect= async (req,res,next) => {

    const {userId} = req.auth;
    if(!userId){
        return res.json({success: false, message: "not authenticated"})
    }else{
        let user= await User.findById(userId);
        if(!user){
            // Auto-create user from Clerk data (handles local dev where webhooks don't fire)
            try {
                const clerkUser = await clerkClient.users.getUser(userId);
                const userData = {
                    _id: clerkUser.id,
                    email: clerkUser.emailAddresses[0].emailAddress,
                    username: (clerkUser.firstName || '') + ' ' + (clerkUser.lastName || ''),
                    image: clerkUser.imageUrl,
                };
                user = await User.create(userData);
            } catch (e) {
                return res.json({success: false, message: "Unable to initialize user account. Please retry."})
            }
        }
        req.user = user;
        next()
    }
    
}