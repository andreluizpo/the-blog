"use server";

import { revalidateTag } from "next/cache";

export async function RevalidateExampleAction(formData: FormData) {
    const path = formData.get("path") || "";
    console.log("Estou em uma Server Action", path);

    // revalidatePath(`${path}`);
    revalidateTag("posts", "max"); // home
    revalidateTag("post-rotina-matinal-de-pessoas-altamente-eficazes", "max"); // single post
}
