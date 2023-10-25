import { defineStore } from 'pinia';
import { useMyStore } from '@/store/myStore.js';
import axiosInstance from '@/services/axios.js';

export const useAlertsStore = defineStore('alerts', {
    state: () => ({
        count: 0,
        items: [],
        role:  'user',
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        
    },
    actions: {
        increment() {
            this.count++
        },
        asyncIncrement() {
            setTimeout(() => {
                this.count++
            }, 500)
        },
        changeData() { useMyStore().Data = this.count },
        async getAxios(params = {}) {
            let result = await axiosInstance.get('/todos/1', {
                params: {
                    limit: 10,
                    ...params
                }
            });
            // console.log(result);
            return result;
        }
    },
})