import { isAuthorized } from '../../utils/gurads'
import {generateNewTokenPair} from '../../utils/authenticate'
import { InternalServerError } from '../../utils/errors';

const userData = {
  id: '1',
  password: 'not_encoded',
  email: 'example@email.test'
}

export default {
    Query: {
      me: isAuthorized((_, __, ___) => userData),
    },

    Mutation: {
      loginUser: async (_, __, {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET}) => {
        // handle credentials for user login
        try {
          return await generateNewTokenPair(ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET)
        } catch(err){
          return InternalServerError
        }
      },

      registerUser: async (_, __, { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET }) => {
        // handle credentials for user registration
        try {
          return await generateNewTokenPair(ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET)
        } catch(err){
          return InternalServerError
        }
      }
    }
  };