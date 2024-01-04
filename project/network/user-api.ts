import { User , userPage } from "@/models/User";
import api from "./axiosInstance";

export async function getUser(name: string) {
    const delay = Math.random() * 2000;
    await new Promise(r => setTimeout(r, delay));
    const response = await api.get<User>("/user/" + name);
    return response.data;
}

export async function getUserPage(page: number) {
    const pageSize = 5;
    const response = await api.get<userPage>(`/user?limit=${pageSize}&offset=${pageSize * (page - 1)}`);
    return response.data;
}

export async function setNickname(user: User, nickname: string) {
    return { ...user, name: nickname };
}