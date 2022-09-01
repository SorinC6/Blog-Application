import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection(orderBy: createdAt_DESC) {
            edges {
                node {
                authors {
                    name
                    id
                    bio
                    photo {
                    url
                    }
                }
                createdAt
                slug
                title
                excerpt
                featuredimage {
                    url
                }
                categories {
                    name
                    slug
                }
                }
            }
            }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}

export const getRecentPosts = async () => {
    const query = gql`
        query getPostDetails(){
            posts(
                orderBy: createdAt_ASC
                last: 3 
                ){
                    title
                    featuredimage {
                        url
                    }
                    createdAt
                    slug
                }
            
        }
    `
    const result = await request(graphqlAPI, query)
    return result.posts
}

export const getSimmilarPosts = async (categories, slug) => {
    const query = gql`
        query getPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: {slug_not: $slug, AND: {categories_sum:{slub_in: $categories}}}
                last: 3
            ){
                title
                featuredimage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.posts
}

export const getCategories = async () => {
    const query = gql`
        query getCategories {
            categories {
                name
                slug    
            }
        }
       
    `
    const result = await request(graphqlAPI, query)
    return result.categories
}