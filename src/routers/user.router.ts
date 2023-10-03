import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { userMiddleware } from "../middlewares/user.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getAll);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userMiddleware.getByIdOrThrow,
  userController.getById,
);

// Endpoint for creating user
router.post(
  "/",
  commonMiddleware.isBodyValid(UserValidator.create),
  userController.createUser,
);
// Endpoint for deleting user
router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.deleteUser,
);
// Endpoint for updating user
router.put(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.updateUser,
);

export const userRouter = router;
