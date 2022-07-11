import { gql } from 'graphql-request';

export const GET_COUNTRY = gql`
  query country($id: ID!) {
    id
    name
    capital
    region
    population
    alpha2Code
    flag
  }
`;

export const GET_COUNTRIES = gql`
  query countries(
    $offset: Int
    $before: String
    $after: String
    $first: Int
    $last: Int
    $name: String
    $name_Icontains: String
    $name_Istartswith: String
    $capital: String
    $capital_Icontains: String
    $capital_Istartswith: String
    $region: String
    $region_Icontains: String
    $region_Istartswith: String
  ) {
    countries(
      offset: $offset
      before: $before
      after: $after
      first: $first
      last: $last
      name: $name
      name_Icontains: $name_Icontains
      name_Istartswith: $name_Istartswith
      capital: $capital
      capital_Icontains: $capital_Icontains
      capital_Istartswith: $capital_Istartswith
      region: $region
      region_Icontains: $region_Icontains
      region_Istartswith: $region_Istartswith
    ) {
      edges {
        node {
          id
          name
          capital
          region
          population
          alpha2Code
          flag
        }
      }
    }
  }
`;
