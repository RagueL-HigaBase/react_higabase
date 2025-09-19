import type { ApiCallRegulation, DataBaseProtocol } from "../regulation/endpoint.regulation";

export type HTTPmethode = "GET"| "POST"| "PUT" | "DELETE" | "OPTIONS"| "PATCH";

export async function buildApiProtocol<T>(regulation: ApiCallRegulation, body?: unknown): Promise<DataBaseProtocol<T>> {
    const API = import.meta.env.VITE_API_URL as string;
    const url = new URL(regulation.endpoint, API).toString();

    const res = await fetch(url, {
        method: regulation.method as HTTPmethode,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: body !== undefined ? JSON.stringify(body) : undefined
    })
    const data: DataBaseProtocol<T> = await res.json();
    if (!data.ok) {
        console.log(data.message);
        return { ok: false, message: data.message }
    }
    return data;
}