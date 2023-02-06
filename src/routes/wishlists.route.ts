import { Router } from "express";
import { deleteMovieInWishListById, listWishlistByUsername, postMovieInWishlist, updateMovieInWishlist } from "../controllers/wishlists.controller";
import { updateBodyValidation, wishlistBodyValidation } from "../middlewares/verifyWishlistBody.middleware";


const router = Router();

router.get("/wishlist/:username", listWishlistByUsername);
router.post("/wishlist", wishlistBodyValidation, postMovieInWishlist);
router.put("/wishlist", updateBodyValidation, updateMovieInWishlist);
router.delete("/wishlist/:id", deleteMovieInWishListById);

export default router;  