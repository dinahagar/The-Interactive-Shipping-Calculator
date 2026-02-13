import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courierApi = createApi({
    reducerPath: 'courierApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/',
    }),
    endpoints: (build) => ({
        getAllCouriers: build.query({
            query() {
              return {
                url: `couriers.mock.json`,
                method: 'GET',
              }
            }
        })
    })
})

export const { useGetAllCouriersQuery } = courierApi