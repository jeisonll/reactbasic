import {useEffect, useState} from "react";
import {TypesDefault} from "../../Home";

export default function useLocalStorage(itemName: string, initialState: any) {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialState);

    try {
        useEffect(() => {
            setTimeout(() => {
                const localStorageTodos = localStorage.getItem(itemName);
                let resultItems;

                if (!localStorageTodos) {
                    localStorage.setItem(itemName, JSON.stringify(initialState));
                    resultItems = initialState;
                } else {
                    resultItems = JSON.parse(localStorageTodos);
                }
                setItem(resultItems);
                setLoading(false);
            }, 5000)
        }, [])
    } catch (e) {

    }

    const saveItem = (newItems: TypesDefault[] | TypesDefault) => {
        setItem(newItems);
        localStorage.setItem(itemName, JSON.stringify(newItems));
    }

    return {
        item,
        saveItem,
        loading
    }
}