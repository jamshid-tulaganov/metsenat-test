export function useTokenize () {
    const token = 'token';

    const get = () => {
        return localStorage.getItem(token);
    };

    const set = (token: string) => {
        localStorage.setItem('token', token);
    }

    const remove = () => {
        localStorage.removeItem(token);
    }

    return { get, set, remove }
}