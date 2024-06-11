
import { apiSlice } from "@/src/redux/apiSlice";
import { API_ENDPOINT } from "../config";

export const countriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => API_ENDPOINT,
      keepUnusedDataFor: 600,
      providesTags: ["Countries"],
    }),
    getProduct: builder.query({
      query: (id) => `${API_ENDPOINT}/${id}`,
      providesTags: (result, error, arg) => [{ type: "Country", id: arg }],
    })
  }),
});

export const {
  useGetCountriesQuery,
  useGetProductQuery,
} = countriesApi;