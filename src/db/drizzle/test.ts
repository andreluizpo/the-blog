import { drizzleDb } from ".";
import { postsTable } from "./schemas";

(async () => {
    const post = await drizzleDb.select().from(postsTable);

    console.log(post);
})();
