import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

export const searchFlights = async (params) => {
    console.log(params)
    const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
        params: {
            originSkyId: params.origin.skyId,
            destinationSkyId: params.destination.skyId,
            originEntityId: params.origin.entityId,
            destinationEntityId: params.destination.entityId,
            date: params.departureDate,
            returnDate: params.returnDate || '',
            adults: params.passengers,
            cabinClass: params.cabinClass, // Economy class
            currency: 'USD',
            market: 'en-US',
            countryCode: 'US',
            sortBy: 'best',
        },
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};

export const searchAirports = async (inputText) => {
    try {
        const response = await axios.get('https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport', {
            params: {
              query: inputText,
              locale: "en-US"
          },
          headers: {
              'x-rapidapi-key': API_KEY,
              'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
          },
          });
        return response.data; 
    } catch (error) {
        throw error;
    }
};
