import { Router } from "express";
import { deleteMovieInWishListById, listWishlistByUsername, postMovieInWishlist, updateMovieInWishlist } from "../controllers/wishlists.controller.js";
import { updateBodyValidation, wishlistBodyValidation } from "../middlewares/verifyWishlistBody.middleware.js";


const router = Router();

router.get("/wishlist/:username", listWishlistByUsername);
router.post("/wishlist", wishlistBodyValidation, postMovieInWishlist);
router.put("/wishlist", updateBodyValidation, updateMovieInWishlist);
router.delete("/wishlist/:id", deleteMovieInWishListById);

export default router;  