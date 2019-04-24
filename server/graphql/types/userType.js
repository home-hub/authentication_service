export default `
  type User {
    id: ID!
    email: String!
    roles: [Role!]
    refreshToken: String!
  }

  type Role {
    name: String!
    description: String!
  }

  type Query {
    me: User!
  }

  type Mutation {
    registerUser(input: RegisterUserInput!): IssueTokenResponse!
    loginUser(input: LoginUserInput!): IssueTokenResponse!
  }

  input RegisterUserInput{
    email: String!,
    password: String!,
    terms: Boolean!
  }

  input LoginUserInput {
    email: String!,
    password: String!,
  }

  type IssueTokenResponse {
    accessToken: String!
    refreshToken: String!
  }
`;