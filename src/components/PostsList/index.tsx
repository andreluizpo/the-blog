import { postRepository } from "@/repositories/post";
import { PostImageCover } from "../PostImageCover";
import { PostHeading } from "../PostHeading";

export async function PostsList() {
    const posts = await postRepository.findAll();

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
                return (
                    <div key={post.id} className="flex flex-col gap-4 group">
                        <PostImageCover
                            linkProps={{
                                href: `/post/${post.slug}`,
                            }}
                            imageProps={{
                                width: 1200,
                                height: 720,
                                src: post.coverImageUrl,
                                alt: post.title,
                            }}
                        />

                        <div className="flex flex-col gap-4 sm:justify-center">
                            <time
                                className="text-slate-600 block text-sm/tight"
                                dateTime={post.createdAt}
                            >
                                {post.createdAt}
                            </time>

                            <PostHeading as="h2" url="#">
                                {post.title}
                            </PostHeading>

                            <p>{post.excerpt}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
