"use server";

export async function RevalidateExampleAction(formData: FormData) {
    const path = formData.get("path") || "s";
    console.log("Estou em uma Server Action", path);
}
