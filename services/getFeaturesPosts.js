import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          authors {
            name
            photo {
              url
            }
          }
          featuredimage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;

    const result = await request(graphqlAPI, query);

    return result.posts;
};