import { defineStore } from "pinia";
import { TabsItem } from '../types/components/tabs.types';


export const useDashboardStore = defineStore("dashboard", {
    state: () => {
        return {
            currentTab: {} as TabsItem
        }
    },

    actions: {
        // 
    }
})