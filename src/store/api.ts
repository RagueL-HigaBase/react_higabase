import type { ApiCallRegulation } from "./regulation/regulation";

export type HTTPmethode = "GET"| "POST"| "PUT" | "DELETE" | "OPTIONS"| "PATCH";

export async function buildApiProtocol(regulation: ApiCallRegulation, body?: unknown): Promise<unknown> {
    const API = import.meta.env.VITE_API_URL as string;
    const url = new URL(regulation.endpoint, API).toString();

    const res = await fetch(url, {
        method: regulation.method as HTTPmethode,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: body !== undefined ? JSON.stringify(body) : undefined
    })

    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw data;
    return data;
}