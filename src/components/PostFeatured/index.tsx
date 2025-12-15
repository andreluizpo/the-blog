import { PostImageCover } from "../PostImageCover";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
    const slug = "qualquercoisa";
    const postLink = `/post/${slug}`;

    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostImageCover
                linkProps={{
                    href: postLink,
                }}
                imageProps={{
                    width: 1200,
                    height: 720,
                    src: "/images/bryen_9.png",
                    alt: "Alt da imagem",
                    priority: true,
                }}
            />

            <PostSummary
                postHeading="h1"
                postLink={postLink}
                createdAt="11/12/2025 14:56"
                title="Lorem ipsum dolor sit amet."
                excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illum sed asperiores praesentium excepturi labore id iste
                    nobis dolores ut maxime. Quibusdam, nulla qui debitis
                    praesentium sint quae ducimus repellat eos."
            />
        </section>
    );
}
