import { findPostBySlugCached } from "@/lib/queries";
import { Metadata } from "next";

type PostSlugPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PostSlugPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await findPostBySlugCached(slug);

    return {
        title: post.title,
        description: post.excerpt,
    };
}

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
