import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../global'

export const resumeApi = createApi({
    reducerPath: 'resumeApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/users/resume` }),
    endpoints: builder => ({
        createResume: builder.mutation({
            query: ({ data, access_token }) => ({
                url: '/create',
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
})

export const { useCreateResumeMutation } = resumeApi
