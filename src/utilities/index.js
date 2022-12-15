/* This file is used to store all the utility functions that are used throughout the application.*/ 

export const formatCurrency = (currency) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(currency);
}