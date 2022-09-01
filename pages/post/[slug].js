import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import { PostDetails, Categories, Author, AdjacentPosts, CommentsForm, Comments } from '../../components'

const ArticleDetails = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetails />
                    <Author
                    // author={post.author} 
                    />
                    <AdjacentPosts
                    // slug={post.slug} createdAt={post.createdAt} 
                    />
                    <CommentsForm
                    // slug={post.slug} 
                    />
                    <Comments
                    //slug={post.slug} 
                    />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        {/* <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails