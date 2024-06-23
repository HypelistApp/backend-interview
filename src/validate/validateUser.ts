import Joi from "joi";

const validateUser = (user: any) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
  });

  return schema.validate(user);
};

export default validateUser;
