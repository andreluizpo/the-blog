"use server";

import { asyncDelay } from "@/utils/async-delay";

type LoginActionState = {
    username: string;
    error: string;
};

export async function loginAction(state: LoginActionState, formDate: FormData) {
    asyncDelay(5000);

    if (!(formDate instanceof FormData)) {
        return {
            username: "",
            error: "Dados inválidos",
        };
    }

    // Dados que o usuário digitou no form
    const username = formDate.get("username")?.toString() || "";
    const password = formDate.get("password")?.toString() || "";

    // Aqui eu checaria se o usuário existe na base de dados
    const isUsernameValid = username === process.env.LOGIN_USER;
    const isPasswordValid = password === process.env.LOGIN_PASS;

    return {
        username: "",
        error: "",
    };
}
