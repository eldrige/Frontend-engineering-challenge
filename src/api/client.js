import { GraphQLClient } from 'graphql-request';
const ENDPOINT = 'https://graphql.country/graphql';
const client = new GraphQLClient(ENDPOINT, { headers: {} });

export default client;
