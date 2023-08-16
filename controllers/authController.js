import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from './../helpers/authHelper.js';
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        //validation
        if (!name || !email || !password || !phone || !address) {
            return res.send({ message: 'All fields are required.' });
        }

        // check user from collection
        const existingUser = await userModel.findOne({ email });

        //check existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Registered! Please log in.',
            });
        }


        //register user
        const hashedPassword = await hashPassword(password);

        //save new user to the collection
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword
        }).save();

        res.status(201).send({
            success: true,
            message: 'User Registered Successfully!',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
};

//POST LOGIN

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password',
            });
        }

        //get user by checking on the basis of email
        const user = await userModel.findOne({ email });

        //if user not found
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered. Please register first.',
            });
        }

        const match = await comparePassword(password, user.password);

        //if password does not match
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password! Please provide correct password again.'
            });
        }

        //token
        const token = JWT.sign(
            {
                _id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d',
            }
        );

        res.status(200).send({
            success: true,
            message: 'User Logged in successfully !',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error,
        });
    }
};


//test controller
export const testController = (req, res) => {
    try {
        res.send("Protected Routes");
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
}