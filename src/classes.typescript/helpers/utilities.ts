export const formatMoney = (quantity: number): string => {
    return quantity.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}