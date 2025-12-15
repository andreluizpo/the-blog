import { postRepository } from "@/repositories/post";
import { PostImageCover } from "../PostImageCover";
import { PostSummary } from "../PostSummary";

export async function PostsList() {
    const posts = await postRepository.findAll();

    return (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
                const postLink = `/post/${post.slug}`;

                return (
                    <div key={post.id} className="flex flex-col gap-4 group">
                        <PostImageCover
                            linkProps={{
                                href: postLink,
                            }}
                            imageProps={{
                                width: 1200,
                                height: 720,
                                src: post.coverImageUrl,
                                alt: post.title,
                            }}
                        />

                        <PostSummary
                            postHeading="h2"
                            postLink={post.slug}
                            createdAt={post.createdAt}
                            title={post.title}
                            excerpt={post.excerpt}
                        />
                    </div>
                );
            })}
        </section>
    );
}
