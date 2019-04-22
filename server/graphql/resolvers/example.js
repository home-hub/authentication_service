import { isAuthorized } from '../../utils/gurads'

export default {
    Query: {
      open: (parent, args, context) => ({value: "Your have reaced an open query"}),
      protected: isAuthorized( (parent, args, context) => ({value: "Your have reaced an protected query"}))
    },
  };