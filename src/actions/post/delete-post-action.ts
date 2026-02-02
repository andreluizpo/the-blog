"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
    // TO DO: checar login do usuário

    // TO DO: remover linhas abaixo
    await asyncDelay(2000);
    logColor(String(id));

    if (!id || typeof id !== "string") {
        return {
            error: "Dados inválidos",
        };
    }

    const post = await postRepository.findById(id).catch(() => undefined);

    if (!post) {
        return {
            error: "Post não existe",
        };
    }

    // TO DO: mover esse método para o repositório
    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

    // TO DO: revalidateTag ou revalidatePath
    revalidateTag("posts", "max");
    revalidateTag(`post-${post.slug}`, "max");

    return {
        error: "",
    };
}
