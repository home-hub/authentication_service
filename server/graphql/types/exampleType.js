export default `
  type Example {
    value: String!
  }

  type Query {
    open: Example!
    protected: Example!
  }
`;