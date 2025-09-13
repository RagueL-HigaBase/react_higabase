export type ProtocolError = { ok: false, message: string };
export type ProtocolSuccess<T> = { ok: true, data: T}

export type DataBaseProtocol<T> = ProtocolSuccess<T> | ProtocolError;

export const ApiCallRegulations = {
    REGISTRATION: {
        method: 'POST',
        endpoint: '/core/register',
    },
} as const;

export type ApiCallKey = keyof typeof ApiCallRegulations;
export type ApiCallRegulation = typeof ApiCallRegulations[ApiCallKey];


