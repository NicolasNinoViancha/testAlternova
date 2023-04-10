import React, { useState, useEffect } from "react";
//models
import { StoreItem } from '@src/models';
//adapters
import { storeItemAdapter } from '@src/adapters';
//constant
const API_URL = 'https://1be9db56-c889-466d-9c12-cba178414901.mock.pstmn.io/';
const MOCK_API = {
    "id": 5,
    "name": "Base Gris",
    "unit_price": 400,
    "stock": 5,
    "description": "¡Prepara el terreno para el juego libre y creativo con la Base Gris LEGO® Classic (11024)! Este juguete de construcción de alta calidad, que mide aproximadamente 38 cm de lado, ofrece a los niños una espaciosa superficie LEGO de 48x48 espigas para crear, jugar y exponer.",
    "image": "https://www.lego.com/cdn/cs/set/assets/blt3baed37200b0845a/11024.png"
};
//hook
const useFecth = (endPoint?: string) => {
    //states
    const [data, setData] = useState<StoreItem>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    //functions
    //description : handle event get store items
    const refetch = async (endPoint?: string) => {
        setError(false);
        setLoading(true);
        try {
            //const response = await fetch(`${API_URL}${endPoint}`);
            //const resJson = await response.json();
            //mock fetch
            const resJson = MOCK_API;
            setData(storeItemAdapter(resJson));
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