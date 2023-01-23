import { Router } from "express";
import { deleteMovieInWishListById, listWishlistByUsername, postMovieInWishlist, updateMovieInWishlist } from "../controllers/wishlists.controller.js";


const router = Router();

router.get("/wishlist/:username", listWishlistByUsername);
router.post("/wishlist", postMovieInWishlist);
router.put("/wishlist", updateMovieInWishlist);
router.delete("/wishlist/:id", deleteMovieInWishListById);

export default router;  