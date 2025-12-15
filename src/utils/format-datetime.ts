import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDatetime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
        locale: ptBR,
    });
}

export function formatRelativeDate(rawDate: string): string {
    const date = new Date(rawDate);

    return formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
    });
}

const rawDate = "2025-12-15T17:24:27.065Z";
console.log(rawDate);
console.log(formatDatetime(rawDate));
console.log(formatRelativeDate(rawDate));

const date = new Date("2025-12-15T17:24:27.065Z");

console.log(
    formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
    })
);
