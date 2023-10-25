import { defineStore } from 'pinia';
import { useAlertsStore } from '@/store/Store.js';


export const usePaginationStore = defineStore('pagination', {
    state: () => ({
        listData: '',
        pageNum: 0,
        size: 4,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        segment() {
            const start = this.pageNum * this.size
            const end = start + this.size;
            return this.listData.slice(start, end);
        },
        pageAll() {
           return Math.ceil(this.listData.length / this.size) - 1;
        },
    },
    actions: {
        async createFakeData() {
            let data = [];
            for (let i = 0; i < 16; i++) {
                const d = (await useAlertsStore().getAxios()).data.title;
                data.push(d);
            }
            this.listData = data;
            // console.log(useAlertsStore().getAxios());
        },
        nextPage() {
            this.pageNum++;
        },
        prevPage() {
            this.pageNum--;
        },
    }
})