import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';

// Resgister User
const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 100),
      viewedProfile: Math.floor(Math.random() * 100),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export default register;

//Login In
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: 'USER NOT EXIST' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'INVALID CREDENTIALS' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.send(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

