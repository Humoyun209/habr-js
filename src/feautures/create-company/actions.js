import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const companyAPI = createApi({
    reducerPath: 'companyApi',
    tagTypes: ["Companies"],
    baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/company"}),
    endpoints: (builder) => ({
        createCompany: builder.mutation({
            query: ({company, access_token}) => ({
                url: '/create',
                method: "POST",
                headers: {
                    type: "multipart/form-data",
                    Authorization: `Bearer ${access_token}`
                },
                body: company
            })
        }),
        getCities: builder.query({
            query: () => '/cities'
        }),
        getCompany: builder.query({
            query: ({companyId, access_token}) => ({
                url: `/${companyId}`,
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
        })
    })
})


export const {useCreateCompanyMutation, useGetCitiesQuery, useGetCompanyQuery} = companyAPI