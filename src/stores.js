import { writable } from "svelte/store";

export const activePage = writable("");
export const isLoggedIn = writable(0);
export const userDetails = writable({
    username: "",
    password: "",
});

export const rolesJSON = [
    {
        id: "1",
        role: "ΓΕΝΙΚΟΣ ΔΙΕΥΘΥΝΤΗΣ",
        name: "Ν/Α",
    },
    {
        id: "2",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΜΑΡΚΕΤΙΝΓΚ",
        name: "Ν/Α",
    },
    {
        id: "3",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΟΙΚΟΝΟΜΙΚΩΝ",
        name: "Ν/Α",
    },
    {
        id: "4",
        role: "ΜΗΧΑΝΙΚΟΣ ΣΧΕΔΙΑΣΜΟΥ ΠΡΟΙΟΝΤΩΝ",
        name: "Ν/Α",
    },
    {
        id: "5",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΠΑΡΑΓΩΓΗΣ",
        name: "Ν/Α",
    },
    {
        id: "6",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΕΡΕΥΝΑΣ ΚΑΙ ΑΝΑΠΤΥΞΗΣ",
        name: "Ν/Α",
    },
    {
        id: "7",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΠΡΟΣΩΠΙΚΟΥ",
        name: "Ν/Α",
    },
    {
        id: "8",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΠΡΟΜΗΘΕΙΩΝ",
        name: "Ν/Α",
    },
    {
        id: "9",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΕΚΠΑΙΔΕΥΣΗΣ",
        name: "Ν/Α",
    },
    {
        id: "10",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΠΟΙΟΤΙΚΟΥ ΕΛΕΓΧΟΥ",
        name: "Ν/Α",
    },
    {
        id: "11",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΑΣΦΑΛΕΙΑΣ",
        name: "Ν/Α",
    },
    {
        id: "12",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΔΗΜΟΣΙΩΝ ΣΧΕΣΕΩΝ",
        name: "Ν/Α",
    },
    {
        id: "13",
        role: "ΔΙΕΥΘΥΝΤΗΣ ΠΛΗΡΟΦΟΡΙΑΚΩΝ ΣΥΣΤΗΜΑΤΩΝ",
        name: "Ν/Α",
    },
];
