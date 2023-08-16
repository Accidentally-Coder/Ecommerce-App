import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
    try {
        console.log('try paisi');
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({
                message: 'Name is required'
            });
        }
        //checking if the category already exists to prevent multiple category with same name
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                succeess: true,
                message: 'Category Already Exists',
            });
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save();
        res.status(201).send({
            succeess: true,
            message: 'New Category Created!',
            category
        })
    } catch (error) {
        console.log(error);
        req.status(500).send({
            succeess: true,
            error,
            message: 'Error in Category',
        });
    }
};


//getAll category
export const categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            succeess: true,
            message: 'All Categories List',
            category,
        });

    } catch (error) {
        res.status(500).send({
            succeess: false,
            error,
            message: 'Error! Cannot get all categories.'
        });
    }
};

//get single category
export const singleCategoryController = async (req, res) => {
    try {
        const { slug } = req.params
        const category = await categoryModel.findOne({ slug });
        res.status(200).send({
            succeess: true,
            message: 'Single Category fetched successfully.',
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            succeess: false,
            error,
            message: 'Error while getting single category.'
        })
    }
};