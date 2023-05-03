import joi from 'joi';

export const signUpSchema = {
  body: joi
    .object()
    .required()
    .keys({
      userName: joi.string().min(4).max(10).required(),
      email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
      password: joi.string().pattern(new RegExp("^[A-Z][a-z]{3,8}$")).required(),
      cPassword: joi.string().valid(joi.ref("password")).required(),
    })
};


export const signin = {
  body: joi.object().required().keys({
   
      email: joi.string().email().required(),
      password: joi.string().pattern(new RegExp("^[A-Z][a-z]{3,8}$")).required()
  })
}

export const confirmEmail = {
  params: joi.object().required().keys({
      token: joi.string().required()
  })
}