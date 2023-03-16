import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { Service } from "../../../api/AbstractService";

export const patientApi = createApi({
    reducerPath: "patientApi",
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/api` }),
    endpoints: (build) => ({
        fetchAllPatients: build.query({
            query: () => ({
                url: `/patients`
            })
        }),
    })
});