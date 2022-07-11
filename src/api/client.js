import { request, GraphQLClient } from 'graphql-request';
const ENDPOINT = 'https://graphql.country/graphql';

// Run GraphQL queries/mutations using a static function
// request(endpoint, query, variables).then((data) => console.log(data));

// ... or create a GraphQL client instance to send requests
const client = new GraphQLClient(ENDPOINT, { headers: {} });
// client.request(query, variables).then((data) => console.log(data));

export default client;
