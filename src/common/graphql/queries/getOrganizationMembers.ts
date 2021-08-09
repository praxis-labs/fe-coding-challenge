import { gql } from "graphql.macro";

export const GET_ORGANIZATION_MEMBERS = gql`
  query {
    currentUser {
      organization {
        id
        name
        jobDepartments
        cohorts {
          id
          name
          createdAt
        }
        users {
          id
          fullName
          workEmail
          personalEmail
          lastLoginAt
          registeredAt
          jobDepartment
          roles {
            name
          }
          cohorts {
            id
            name
          }
        }
      }
    }
  }
`;
