import { RevalidateExampleAction } from "@/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";

// export const dynamic = "force-static";
// export const revalidate = 30;

export default async function ExemploDynamicPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const hour = formatHour(Date.now());

    const response = await fetch("https://randomuser.me/api/?results=1", {
        next: {
            tags: ["randomuser"],
            revalidate: 30,
        },
    });
    const json = await response.json();
    const name = json.results[0].name.first;

    return (
        <main className="min-h-[600px] text-4xl font-bold">
            <div>
                Name: {name} | Hora: {hour} (ID: {id})
            </div>

            <form action={RevalidateExampleAction} className="py-16">
                <input
                    type="hidden"
                    name="path"
                    defaultValue={`/exemplo/${id}`}
                />
                <button
                    type="submit"
                    className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer"
                >
                    REVALIDATE
                </button>
            </form>
        </main>
    );
}
