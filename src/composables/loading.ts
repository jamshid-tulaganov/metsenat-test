import { ref, computed } from "vue";
export enum Loading {
    LOADING = 0,
    LOADED = 1,
    FAILED = -1
}

export const useLoading = () => {
    const loading = ref<number| null>(null);

    // start the loading
    const loadingStart = () => loading.value = Loading.LOADING;

    //finish loading
    const loadingFinish = () => loading.value = Loading.LOADED;

    // failed loading
    const loadingFailed = () => loading.value = Loading.FAILED;


    const startLoading = async (callback: Function) => {
        try {
            loadingStart();
            await callback();
            loadingFinish();
        } catch (e) {
            loadingFailed();
            throw e;
        }
    };

    const isLoading = computed(() => {
        return loading.value === Loading.LOADING;
    });

    const isLoaded = computed(() => {
        return loading.value === Loading.LOADED;
    });

    const isFailed = computed(() => {
        return loading.value === Loading.FAILED;
    })

    return { startLoading, isLoading, isLoaded, isFailed, loading };
}