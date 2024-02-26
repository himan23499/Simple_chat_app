import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';
import generateTokenandSetCookie from "../utils/generateToken.js";

export const login = async (req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({ username });
        const iscorrectPassword = await bcrypt.compare(password,user?.password || "");

        if(!user || !iscorrectPassword){
            return res.status(400).json({error:"Invalid Username or password"});

        }

        generateTokenandSetCookie(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        })
    }catch(error){
            console.log("Error in Login Controller",error.message);
            res.status(500).json({error:"Internal Server Error"});
    }
}
export const logout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    }catch(error){
        console.log("Error in Login Controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
}
}
export const signup = async(req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,email,gender} = req.body;
        if(password != confirmPassword){
            return res.status(400).json({error:"Password and ConfirmPassword do not match"});
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"Username Already exists"});
        }

        //Hash Password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const boyPrfofilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            email,
            gender,
            profilePic: gender === "male"? boyPrfofilePic:girlProfilePic
        })
        if(newUser){

       generateTokenandSetCookie(newUser._id,res);
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            email:newUser.email,
            profilePic:newUser.profilePic
        })
    }else{
        res.status(401).json({error:"User already exists"})
    }
    }catch(error){
            console.log("Error in Signup Controller",error.message);
            res.status(500).json({error:"Internal Server Error"});
    }
    console.log("signup User");
}

