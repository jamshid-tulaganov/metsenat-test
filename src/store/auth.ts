import { defineStore } from "pinia";
import { UserLogin } from '../types/models/auth.model';
import { instance } from '../plugins/axios';
import { useTokenize } from '../composables/tokenize';

interface UserResponse {
    refresh: string,
    access: string
}

export const useAuthStore = defineStore("auth", {
    state() {
        return {
            user: {} as UserLogin,
            isAuthenticated: false,
            refreshToken: ""
        }
    },

    actions: {
        async check() {
            const { get } = useTokenize();

            if (get()) {
                this.isAuthenticated = true;
            }
        },

        async login() {
            const response = await instance.post<UserResponse>('/auth/login/', this.user);

            if (response.data.access) {
                const { get, set } = useTokenize();
                set(response.data.access);

                instance.defaults.headers.common["Authorization"] = "Bearer " + get();
                this.isAuthenticated = true;
                this.refreshToken = response.data.refresh;
            }
        },

        logout() {
            const { remove } = useTokenize();
            remove();
            this.isAuthenticated = false;
        },


    }
})