import { api } from "../api";

const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${api}/${endpoint}`);

        if (!(response.status == 200)) {
            throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
        }

        return await response.json();
    } catch (err) {
        throw new Error(err)
    }

};

const fetchAllData = async (endpoints=[]) => {
    try {
        const resultsArray = await Promise.all(
            endpoints.map(fetchData)
        );

        const combinedResults = resultsArray.reduce((acc, result) => {
            return { ...acc, ...result };
        }, {});

        return combinedResults;
    } catch (err) {
        throw new Error(err)
    }

};

export { fetchAllData };