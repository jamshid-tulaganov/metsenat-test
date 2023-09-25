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
        async login() {
            const response = await instance.post<UserResponse>('/auth/login/', this.user);

            if (response.data.access) {
                // set token
                const { set } = useTokenize();
                set(response.data.access);

                this.isAuthenticated = true;
                this.refreshToken = response.data.refresh;

            }
        },


        logout() {
            const { remove } = useTokenize();
            remove();
            this.isAuthenticated = false;
        }
    }
})