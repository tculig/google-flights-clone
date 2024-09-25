// src/api.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

export const searchFlights = async (params) => {
    const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
        params: {
            originSkyId: params.origin,
            destinationSkyId: params.destination,
            date: params.departureDate,
            returnDate: params.returnDate || '',
            adults: params.passengers,
            cabinClass: 'economy', // Economy class
            currency: 'USD',
            market: 'en-US',
            countryCode: 'US'
        },
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        },
    };

   /* const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/checkServer',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        },
    };*/



    try {
        const response = await axios.request(options);
        return response.data; // Adjust based on actual response structure
    } catch (error) {
        throw error;
    }
};

export const searchAirports = async (inputText) => {
    const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
        params: {
            query: inputText,
            locale: "en-US"
        },
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        },
    };

   /* const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/checkServer',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        },
    };*/



    try {
        const response = await axios.request(options);
        return response.data; // Adjust based on actual response structure
    } catch (error) {
        throw error;
    }
};
