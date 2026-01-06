import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
    async findAllPublic(): Promise<PostModel[]> {
        console.log("\n", "Drizzle - findAllPublic", "\n");
        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
            where: (posts, { eq }) => eq(posts.published, true),
        });

        return posts;
    }

    async findBySlugPublic(slug: string): Promise<PostModel> {
        console.log("\n", "Drizzle - findBySlugPublic", "\n");
        const post = await drizzleDb.query.posts.findFirst({
            where: (posts, { eq, and }) =>
                and(eq(posts.slug, slug), eq(posts.published, true)),
        });

        if (!post) throw new Error("Post não encontrado para slug");

        return post;
    }

    async findAll(): Promise<PostModel[]> {
        console.log("\n", "Drizzle - findAll", "\n");
        const posts = await drizzleDb.query.posts.findMany({
            orderBy: (posts, { desc }) => desc(posts.createdAt),
        });

        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        console.log("\n", "Drizzle - findById", "\n");
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
