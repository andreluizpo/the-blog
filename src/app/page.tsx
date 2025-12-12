import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostImageCover } from "@/components/PostImageCover";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <Container>
            <Header />

            <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
                <PostImageCover
                    linkProps={{
                        href: "/post/algumacoisa",
                    }}
                    imageProps={{
                        width: 1200,
                        height: 720,
                        src: "/images/bryen_9.png",
                        alt: "Alt da imagem",
                        priority: true,
                    }}
                />

                <div className="flex flex-col gap-4 sm:justify-center">
                    <time
                        className="text-slate-600 block text-sm/tight"
                        dateTime="2025-11-12"
                    >
                        11/12/2025 14:56
                    </time>

                    <PostHeading as="h1" url="#">
                        Lorem ipsum dolor sit amet.
                    </PostHeading>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Illum sed asperiores praesentium excepturi labore
                        id iste nobis dolores ut maxime. Quibusdam, nulla qui
                        debitis praesentium sint quae ducimus repellat eos.
                    </p>
                </div>
            </section>

            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>

            <footer>
                <p className="text-6xl font-bold text-center py-8">Footer</p>
            </footer>
        </Container>
    );
}
