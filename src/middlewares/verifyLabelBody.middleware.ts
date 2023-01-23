import { Request, Response, NextFunction } from "express";
import { Label, LabelSchema } from "../schemas/label.schema.js";

export async function labelBodyValidation(req: Request, res: Response, next: NextFunction){
    const label = req.body as Label;
    const { error } = LabelSchema.validate(label, { abortEarly: false });

    if (error) {
        return res.status(400).send({
          message: error.message
        });
      }
    next()
}