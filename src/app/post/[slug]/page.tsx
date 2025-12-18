import { findPostBySlugCached } from "@/lib/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
    const { slug } = await params;

    let post;

    try {
        post = await findPostBySlugCached(slug);
    } catch {
        post = undefined;
    }

    if (!post) notFound();

    return (
        <div>
            <h1 className="text-6xl font-extrabold py-16">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
