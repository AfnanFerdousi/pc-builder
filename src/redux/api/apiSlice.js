import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
   
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getPCs: builder.query({
            query: () => "/pcs",
        }),
    }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPCsQuery } = apiSlice;