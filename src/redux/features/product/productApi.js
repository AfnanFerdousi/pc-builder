import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints(
    {
        endpoints: (builder) => ({
            getPCs: builder.query({
                query: () => '/pc',
            }),
            postPc: builder.mutation({
                query: (body) => ({
                    url: '/buildpc',
                    method: 'POST',
                    body,
                }),
            })
    }
)
    });

export const { useGetPCsQuery, usePostPcMutation } = productApi