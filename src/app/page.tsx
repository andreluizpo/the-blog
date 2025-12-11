import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <Container>
            <Header />

            <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
                <Link
                    className="w-full h-full overflow-hidden rounded-xl"
                    href="#"
                >
                    <Image
                        className="group-hover:scale-105 transition"
                        src="/images/bryen_0.png"
                        width={1200}
                        height={720}
                        alt="Título do post"
                    />
                </Link>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illum sed asperiores praesentium excepturi labore id iste
                    nobis dolores ut maxime. Quibusdam, nulla qui debitis
                    praesentium sint quae ducimus repellat eos.
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
