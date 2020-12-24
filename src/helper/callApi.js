import axios from "axios";

export const callApi = async ({ url, method = 'get', params, data, key = '' }) => {

    let aaa = [];
    await axios({
        baseURL: process.env.REACT_APP_CAT_API_URL,
        url: `${url}/${key}`,
        method,
        data,
        params,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'x-api-key': process.env.REACT_APP_CAT_API_KEY
        }
    })
        .then(response => {
            // console.log("tg..05 after axios response:", method, ' ', url, ' ', response.data);
            // return response.data;
            aaa = [...response.data];
        })

        .catch(error => {
            console.log('Api message:', error)
        })
    return aaa;
};

