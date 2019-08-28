import bcrypt from 'bcrypt';
import { isAuthorized } from '../../utils/gurads'
import { generateNewTokenPair, generateAccessToken, generateRefreshToken } from '../../utils/authenticate'
import { InternalServerError, NotFoundClientError } from '../../utils/errors';
import { BadRequestClientError } from './../../utils/errors';

const hashPassword = (password) => {
    const saltRounds = 10
    return bcrypt.hash(password, saltRounds)
}

const validatePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
}

export default {
    Query: {
      me: isAuthorized((_, __, {models, user}) => models.User.default.findOne({id: user.id})),
    },

    Mutation: {
      loginUser: async (_, { input }, { models }) => {
        try {
          const user = await models.User.default.findOne({email: input.email})

          if (!user) {
            return NotFoundClientError
          } else if (!await validatePassword(input.password, user.password)){
            return BadRequestClientError
          }

          return {
            accessToken: await generateAccessToken(user),
            refreshToken: await generateRefreshToken(user)
          }
        } catch(err){
          console.info(err)
          return InternalServerError
        }
      },
      registerUser: async (_, { input }, { models }) => {
        try {
          input.password = await hashPassword(input.password)
          const user = await models.User.default.create(input)
          return {
            accessToken: await generateAccessToken(user),
            refreshToken: await generateRefreshToken(user)
          }

        } catch (err) {
          console.info(err)
          return BadRequestClientError
        }
      },
    }
  };