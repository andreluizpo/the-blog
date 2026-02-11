import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { logColor } from "@/utils/log-color";
import { asyncDelay } from "@/utils/async-delay";
import { SIMULATE_WAIT_IN_MS } from "@/lib/constants";

export class DrizzlePostRepository implements PostRepository {
    async findAllPublic(): Promise<PostModel[]> {
        await asyncDelay(SIMULATE_WAIT_IN_MS, true);
        logColor("Drizzle - findAllPublic", Date.now());

        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
            where: (posts, { eq }) => eq(posts.published, true),
        });

        return posts;
    }

    async findBySlugPublic(slug: string): Promise<PostModel> {
        await asyncDelay(SIMULATE_WAIT_IN_MS, true);
        logColor("Drizzle - findBySlugPublic", Date.now());

        const post = await drizzleDb.query.posts.findFirst({
            where: (posts, { eq, and }) =>
                and(eq(posts.slug, slug), eq(posts.published, true)),
        });

        if (!post) throw new Error("Post não encontrado para slug");

        return post;
    }

    async findAll(): Promise<PostModel[]> {
        await asyncDelay(SIMULATE_WAIT_IN_MS, true);
        logColor("Drizzle - findAll", Date.now());

        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
        });

        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        await asyncDelay(SIMULATE_WAIT_IN_MS, true);
        logColor("Drizzle - findById", Date.now());

        const post = await drizzleDb.query.posts.findFirst({
            where: (post, { eq }) => eq(post.id, id),
        });

        if (!post) throw new Error("Post não encontrado para ID");

        return post;
    }
}

// (async () => {
//     const repository = new DrizzlePostRepository();
//     const posts = await repository.findAllPublic();

//     console.log(posts);
// })();
