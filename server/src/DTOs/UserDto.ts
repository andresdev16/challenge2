import Joi from '@hapi/joi';
import {IUser} from '../Models/User'

export const signupValidation = (data: IUser) => {
    const userSchema = Joi.object({
        username: Joi
            .string()
            .min(4)
            .max(30),
        email: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .min(6)
            .required()
    });
    return userSchema.validate(data);
};

export const signinValidation = (data: IUser) => {
    const userSchema = Joi.object({
        email: Joi
            .string()
            .required(),
        password: Joi
            .string()
            .min(6)
            .required()
    });
    return userSchema.validate(data);
};
