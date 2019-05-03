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
      loginUser: async (_, __, {}) => {
        // handle credentials for user login
        try {
          return await generateNewTokenPair()
        } catch(err){
          return InternalServerError
        }
      },

      registerUser: async (_, __, {}) => {
        // handle credentials for user registration
        
          return await generateNewTokenPair()
        
      }
    }
  };