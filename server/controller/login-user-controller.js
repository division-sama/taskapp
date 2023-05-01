import user from "../schema/userModal.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
//login user

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await user.login(email, password);
    let token = createtoken(users._id);
    res.status(200).json({ token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create token for da branch backend/1.1

dotenv.config();

const createtoken = (_id) => {
  return jwt.sign({ _id }, process.env.DA_STRING, { expiresIn: "3d" });
};

//signup user

export const signupUser = async (req, res) => {

  const { email, password } = req.body;
  try {
    const users = await user.signup(email, password);
    let token = createtoken(users._id);
    res.status(200).json({ token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
