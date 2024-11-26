import { QueryClient } from "@tanstack/react-query"
import axios, {
  // AxiosError,
  CreateAxiosDefaults,
  // InternalAxiosRequestConfig,
} from "axios"
// import { Session } from "@/feature/auth/api/types"

const baseConfig: CreateAxiosDefaults = {
  baseURL: `https://jsonplaceholder.typicode.com/`,
}
// Test per deplou

export const axiosInstance = axios.create(baseConfig)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => axiosInstance.get(queryKey[0] as string),
    },
  },
})

export default queryClient
