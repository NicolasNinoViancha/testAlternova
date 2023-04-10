export type PropsCardProduct = {
    testID?: string;
    name?: string;
    image?: string;
    stock?: number;
    price?: number;
    onPress: () => void;
    onBuy: (total: number) => void;
}