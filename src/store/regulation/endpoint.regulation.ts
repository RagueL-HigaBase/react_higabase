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
    TOKEN_GUARD: {
        method: 'POST',
        endpoint: '/core/token'
    },
    SESSION_PATCH: {
        method: 'PATCH',
        endpoint: '/core/session'
    },
    SESSION_POST: {
        method: 'POST',
        endpoint: '/core/session'
    },
    REGISTRATION: {
        method: 'POST',
        endpoint: '/core/register',
    },
    LOGIN: {
        method: 'POST',
        endpoint: '/core/login'
    },
    IDENTITY: {
        method: 'POST',
        endpoint: '/core/identity'
    }

} as const;

export type ApiCallKey = keyof typeof ApiCallRegulations;
export type ApiCallRegulation = typeof ApiCallRegulations[ApiCallKey];
