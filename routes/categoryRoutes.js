import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, singleCategoryController } from '../controllers/categoryController.js';


//router object
const router = express.Router();

//routes

//create category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

//getAll category
router.get('/get-category', categoryController);

//single category
router.get('/single-category/:slug', singleCategoryController);

export default router;
