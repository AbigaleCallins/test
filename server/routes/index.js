import * as express from "express";
const router = express.Router();
import reviewsRouter from "./reviews";
import usersRouter from "./users";

// localhost:3000/api/chirps/
router.use("/reviews", reviewsRouter);
router.use("/users", usersRouter);

export default router;