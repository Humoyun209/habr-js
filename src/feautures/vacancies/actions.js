import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const vacancyApi = createApi({
    reducerPath: 'vacancyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/vacancy' }),
    endpoints: builder => ({
        getTags: builder.query({
            query: () => '/tags',
        }),
        createVacancy: builder.mutation({
            query: ({ body, access_token }) => ({
                url: '/create',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    type: 'application/json',
                },
                body: body,
            }),
        }),
        getVacancies: builder.query({
            query: () => ({
                url: '/list',
            }),
        }),
        getVacancy: builder.query({
            query: ({ vacancyId }) => ({
                url: `/${vacancyId}`,
                keepalive: true,
            }),
        }),
    }),
    keepUnusedDataFor: 0,
})

export const {
    useGetTagsQuery,
    useCreateVacancyMutation,
    useGetVacanciesQuery,
    useGetVacancyQuery,
} = vacancyApi
