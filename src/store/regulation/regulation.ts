export const ApiCallRegulations = {
    REGISTRATION: {
        method: 'POST',
        endpoint: '/core/register',
    },
} as const;

export type ApiCallKey = keyof typeof ApiCallRegulations;
export type ApiCallRegulation = typeof ApiCallRegulations[ApiCallKey];
