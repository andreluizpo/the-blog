import { findPostBySlugCached } from "@/lib/queries";

type SinglePostProps = {
    slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
    const post = await findPostBySlugCached(slug);

    return (
        <div>
            <h1 className="text-6xl font-extrabold py-16">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
