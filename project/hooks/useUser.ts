import useSWR from "swr";
import * as UserApi from "@/network/user-api";
import { AxiosError } from "axios";

export default function useUser(name: string) {

    const { data, isLoading, mutate } = useSWR(name, async () => {
        try {
            return await UserApi.getUser(name);
        } catch (error) {
            if (error instanceof AxiosError && error.response?.status === 404) {
                return null;
            } else {
                throw error;
            }
        }
    });

    return {
        user: data,
        userLoading: isLoading,
        mutateUser: mutate,
    }
}