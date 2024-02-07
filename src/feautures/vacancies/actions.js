import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const vacancyApi = createApi({
    reducerPath: 'vacancyApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000/vacancies'}),
    endpoints: builder => ({
        getLevels: builder.query({
            query: () => '/levels'
        })
    })
})

export const {useGetLevelsQuery} = vacancyApi