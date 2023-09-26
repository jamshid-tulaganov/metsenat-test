import { defineStore } from "pinia";
import { TabsItem } from '../types/components/tabs.types';
import { instance } from '../plugins/axios';
import { SponsorLists } from '../types/models/sponsors.models';

interface SponsorResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: SponsorLists[]
}

export const useDashboardStore = defineStore("dashboard", {
    state: () => {
        return {
            currentTab: {
                id: 1,
                tittle: "Dashboard",
                active: true
            } as TabsItem,
            count: 0,
            currentPage: 1,
            currentPageSize: 10,
            sponsorsList: [] as SponsorLists[],
            isLoading: false
        }
    },

    actions: {
        async getSponsorsList() {
            const response = await instance.get<SponsorResponse>(`/sponsor-list/?page=${this.currentPage}&page_size=${this.currentPageSize}`);

            this.count = response.data.count;
            this.sponsorsList = response.data.results;
        },

        async getSponsorByTerm(term: string) {
            const response = await instance.get<SponsorResponse>(`/sponsor-list/?search=${term}`);

            this.count = response.data.count;
            this.sponsorsList = response.data.results;
        }
    }
})