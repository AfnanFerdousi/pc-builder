import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints(
    {
        endpoints: (builder) => ({
            getPCs: builder.query({
                query: () => '/pc',
            }),
    }
)
    });

export const { useGetPCsQuery } = productApi