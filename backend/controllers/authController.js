import User from '../models/authModels.js'
import bcrypt from 'bcryptjs'
import createToken from '../JWT/token.js'

export const signup = async (req, res) => {
  try {
    const { username, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    createToken(savedUser._id, res);

    const userObj = savedUser.toObject();
    delete userObj.password;

    res.status(201).json({ success: true, message: "User created successfully", user: userObj });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    createToken(user._id, res);

    const userObj = user.toObject();
    delete userObj.password;

    res.status(200).json({ message: "Signin successful", user: userObj });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const signout = async (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({ message: "User signed out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllusers=async(req,res)=>{
  try {
    const loogedinuser = req.user._id;
    const alluser = await User.find({_id:{$ne:loogedinuser}}).select("-password");
    res.status(200).json({alluser})
  } catch (error) {
    console.log(error)
  }
}



