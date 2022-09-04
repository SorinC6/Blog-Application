
import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getAdjacentPosts = async (createdAt, slug) => {
    const query = gql`
      query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
        next:posts(
          first: 1
          orderBy: createdAt_ASC
          where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
        ) {
          title
          featuredimage {
            url
          }
          createdAt
          slug
        }
        previous:posts(
          first: 1
          orderBy: createdAt_DESC
          where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
        ) {
          title
          featuredimage {
            url
          }
          createdAt
          slug
        }
      }
    `;

    const result = await request(graphqlAPI, query, { slug, createdAt });

    return { next: result.next[0], previous: result.previous[0] };
};