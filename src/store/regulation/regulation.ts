export type ProtocolError = { ok: false, message: string };
export type ProtocolSuccess<T> = { ok: true, data: T}
export type DataBaseProtocol<T> = ProtocolSuccess<T> | ProtocolError;

export const ApiMethods  = { 
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    OPTIONS: "OPTIONS",
    PATCH: "PATCH"
} 

export const ApiCallRegulations  = {
    REGISTRATION: {
        method: 'POST',
        endpoint: '/core/register',
    },
    LOGIN: {
        method: 'POST',
        endpoint: '/core/login'
    },
    GUARD: {
        method: 'POST',
        endpoint: '/core/guard'
    },
    IDENTITY: {
        method: 'POST',
        endpoint: '/core/identity'
    }

} as const;

export type ApiCallKey = keyof typeof ApiCallRegulations;
export type ApiCallRegulation = typeof ApiCallRegulations[ApiCallKey];
