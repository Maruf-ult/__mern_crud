import { body, validationResult } from "express-validator";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  next();
};

export const userValidationRules = [
  body("roll")
    .isInt({ min: 1 })
    .withMessage("Roll number must be an unique positive integer"),

  body("name")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 and 50 characters"),

  body("email")
  .isEmail()
  .withMessage("Please enter a valid email address"),

  body("projectname")
    .isLength({ min: 3, max: 100 })
    .withMessage("Project name must be between 3 and 100 characters"),
];
