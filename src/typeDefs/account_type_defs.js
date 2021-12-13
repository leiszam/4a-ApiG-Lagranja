const {gql} = require('apollo-server');

const  accountTypeDef = gql`
    type  Account {
        id: Int!
        username: String!
        email: String!
        first_name: String!
        last_name: String!
        is_active: Boolean
        phone_number: String!
        last_login: String
        gender: String

    }
    type  Account2 {
        id: Int!
        username: String!
        email: String!
        first_name: String!
        last_name: String!
        is_active: Boolean
        phone_number: String!
        last_login: String
        gender: String
        password: String!

    }

    type Account3{
        id: Int!,
        username: String!
        first_name: String!
        last_name: String!
        last_login: String!
    }

    type Query {
        accountById(id: Int!): Account
        accountAll: [Account]
        getUserByToken: Account3!
    }

    input LoginInput {
        username: String!
        password: String!
    }
    input RegisterUserInput{
         username: String!
        first_name: String!
        last_name: String!
        gender: String!
        phone_number: String!
        email: String!
        password1: String!
        password2: String!
    }
    
    input UpdateUserInput{
        username: String!
        email: String!
        first_name: String!
        last_name: String!
        is_active: Boolean
        phone_number: String!
        last_login: String
        gender: String
        password: String!
    }

    type Token {
        key: String!
    }
     
    type Message {
        Message: String
    }

    

    type Mutation{
        logIn(credentials: LoginInput!): Token!
        Register(credentials: RegisterUserInput!): Token!
        DeleteUser(id: Int!): Message
        UpdateUser(id: Int! , credentials:UpdateUserInput!):Account2!

    }


`;

module.exports = accountTypeDef;