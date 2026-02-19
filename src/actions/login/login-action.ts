"use server";

import { asyncDelay } from "@/utils/async-delay";

type LoginActionState = {
    username: string;
    error: string;
};

export async function loginAction(state: LoginActionState, formDate: FormData) {
    asyncDelay(5000);

    return {
        username: "",
        error: "Teste de erro",
    };
}
