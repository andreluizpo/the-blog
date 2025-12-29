"use client";

export function ClientComponent({ children }: { children: React.ReactNode }) {
    console.log("ClientComponent");
    return <div>Client Component{children}</div>;
}
