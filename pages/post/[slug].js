import React from "react";
import { getPosts, getPostDetails } from "../../services";
import {
    PostDetails,
    Categories,
    Author,
    CommentsForm,
    Comments,
    PostWidget
} from "../../components";
import { AdjacentPosts } from '../../sections'

const ArticleDetails = ({ post }) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetails post={post} />
                    <Author author={post?.authors[0]} />
                    <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;

export async function getStaticProps({ params }) {
    const post = await getPostDetails(params.slug);
    return {
        props: { post },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}
