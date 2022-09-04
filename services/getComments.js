import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getComments = async (slug) => {
    const query = gql`
      query GetComments($slug:String!) {
        comments(where: {post: {slug:$slug}}){
          name
          createdAt
          comment
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result.comments;
};