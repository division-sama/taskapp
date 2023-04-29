import user from "../schema/userModal.js";

//login user

export const loginUser = async (req, res) => {
    res.json({mssg : 'login user'});
}

//signup user

export const signupUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const users = await user.signup(email,password);
        res.status(200).json({email,users});
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}