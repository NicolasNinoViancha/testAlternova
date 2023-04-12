import React, { useState, useEffect } from "react";
//models
import { StoreItem } from '@src/models';
//adapters
import { storeItemsAdapter } from '@src/adapters';
//constant
const API_URL = 'https://d15078a9-dfc7-49e7-b0f4-a28e9f81cdb7.mock.pstmn.io/';
const MOCK_API = {
    "products": [
        {
            "id": 1,
            "name": "Base Gris",
            "unit_price": 400,
            "stock": 5,
            "image": "https://www.lego.com/cdn/cs/set/assets/blt3baed37200b0845a/11024.png"
        },
        {
            "id": 2,
            "name": "Llavero de Nueva York",
            "unit_price": 250,
            "stock": 8,
            "image": "https://www.lego.com/cdn/cs/set/assets/blt841ff4b13275f885/854032.jpg"
        },
        {
            "id": 3,
            "name": "Llavero de Black Panther",
            "unit_price": 120,
            "stock": 0,
            "image": "https://www.lego.com/cdn/cs/set/assets/blte57c48b15e5c3dd7/854189.png"
        },
        {
            "id": 4,
            "name": "Postal de Nueva York",
            "unit_price": 500,
            "stock": 1,
            "image": "https://www.lego.com/cdn/cs/set/assets/bltae0305908b9ef97a/40519.png"
        },
        {
            "id": 5,
            "name": "Portalápices",
            "unit_price": 90,
            "stock": 2,
            "image": "https://www.lego.com/cdn/cs/set/assets/blt79e9504b3cc67f96/41936.jpg"
        }
    ]
};
//hook
const useFecth = (endPoint?: string) => {
    //states
    const [data, setData] = useState<StoreItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    //functions
    //description : handle event get store items
    const refetch = async (endPoint?: string) => {
        setError(false);
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}${endPoint}`);
            const resJson = await response.json();
            //mock fetch
            //const resJson = MOCK_API;
            setData(storeItemsAdapter(resJson.products));
        } catch (error) {
            setError(true);
        } finally {
            setTimeout(() => setLoading(false), 5000);
        }
    }
    //effects
    useEffect(() => {
        refetch(endPoint || '');
    }, [endPoint])

    return {
        data,
        loading,
        error,
        refetch
    }
}

export default useFecth;