import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const responseApi = createApi({
    reducerPath: 'ResponseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/vacancy' }),
    endpoints: builder => ({
        respondToVacancy: builder.mutation({
            query: ({ vacancyId, access_token, companyId, coverLetter }) => ({
                url: `/${vacancyId}/respond`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    type: 'application/json',
                },
                body: JSON.stringify({
                    company_id: companyId,
                    vacancy_id: vacancyId,
                    cover_letter: coverLetter,
                }),
            }),
        }),
    }),
})

export const { useRespondToVacancyMutation } = responseApi
