import { ApiStoreItem, StoreItem } from "@src/models";

export const storeItemAdapter = (data: ApiStoreItem): StoreItem => {
    const {
        unit_price,
        ...rest
    } = data;
    return {
        ...rest,
        price: unit_price
    }
}

export const storeItemsAdapter = (data: ApiStoreItem[]): StoreItem[] =>
    data.map((e, i) => storeItemAdapter(e))