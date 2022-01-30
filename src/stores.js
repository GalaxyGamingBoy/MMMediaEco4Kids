import { writable } from "svelte/store";

export const activePage = writable("");
export const isLoggedIn = writable(0);
export const userDetails = writable({
    username: "",
    password: "",
});
