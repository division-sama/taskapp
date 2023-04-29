import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";



const userModal = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true,
    }
});


userModal.statics.signup = async function (email,password){

    const exist = await this.findOne({email});

    if(!email || !password){
        throw Error('All fields must be filled');
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not Valid');
    }

    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong');
    }

    if(exist) {
        throw Error('this email already exist');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({email,password:hash});
    return user;
}


const user = mongoose.model('user',userModal);

export default user;