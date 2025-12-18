import { findPostBySlugCached } from "@/lib/queries";

type PostSlugPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
    const { slug } = await params;

    const post = await findPostBySlugCached(slug);

    return (
        <div>
            <h1 className="text-6xl font-extrabold py-16">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
