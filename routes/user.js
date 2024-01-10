import express from 'express';
import { getAllUsers, register, specialFunc, updateUser, deleteUser, login, getMyProfile, logout,  } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();


router.get("/all", getAllUsers )


 router.post("/new", register)

 router.post("/login", login)


 router.get("/logout", logout)

/* router.get("/userid/special", specialFunc) */




/* router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser) */


/* router.get("/userid/:id", getUserDetails) */

router.get("/me", isAuthenticated ,getMyProfile)


router.put("/userid/:id", updateUser)


router.delete("/userid/:id", deleteUser)


//project





export default router;