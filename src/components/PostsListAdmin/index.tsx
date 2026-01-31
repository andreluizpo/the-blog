import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../admin/DeletePostButton";

export default async function PostListAdmin() {
    const posts = await findAllPostAdmin();

    return (
        <div className="mb-16">
            {posts.map((post) => {
                return (
                    <div
                        key={post.id}
                        className={clsx(
                            "py-2 px-2",
                            !post.published && "bg-slate-300",
                            "flex items-center justify-between gap-2",
                        )}
                    >
                        <Link href={`/admin/post/${post.id}`}>
                            {post.title}
                        </Link>

                        {!post.published && (
                            <span className="text-xs text-slate-600 italic">
                                (Não publicado)
                            </span>
                        )}

                        <DeletePostButton id={post.id} title={post.title} />
                    </div>
                );
            })}

            <div
                className={clsx(
                    "fixed z-50 inset-0 bg-black/50 backdrop-blur-xs",
                    "flex items-center justify-center text-center",
                )}
            >
                <div
                    className={clsx(
                        "bg-slate-100 p-6 rounded-lg max-w-2xl mx-6",
                        "flex flex-col gap-6",
                        "shadow-lg shadow-black/30",
                    )}
                >
                    <h3 className="text-xl font-extrabold">
                        Título do diálogo
                    </h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quos nesciunt nihil voluptatem eligendi labore
                        asperiores eum dicta officia. Recusandae in maiores
                        quidem mollitia quaerat aperiam sunt illo minima dolor
                        aspernatur.
                    </p>
                    <div className="flex items-center justify-around">
                        <button
                            className={clsx(
                                "bg-slate-200 hover:bg-slate-300 transition text-slate-950",
                                "flex items-center justify-center",
                                "py-2 px-4 cursor-pointer rounded-lg",
                            )}
                            autoFocus
                        >
                            Cancelar
                        </button>
                        <button
                            className={clsx(
                                "bg-blue-500 hover:bg-blue-600 transition text-blue-50",
                                "flex items-center justify-center",
                                "py-2 px-4 cursor-pointer rounded-lg",
                            )}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
