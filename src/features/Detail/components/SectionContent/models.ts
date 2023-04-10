export type PropsSectionContent = {
    testID?: string;
    id?: number;
    image?: string;
    title?: string;
    description?: string;
    stock?: number;
    price?: number;
    onBuy: (id: number, total: number) => void;
}