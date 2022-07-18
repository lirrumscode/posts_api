require("dotenv").config();
const { default: axios } = require("axios");

/**
 * It makes a GET request to the API endpoint and returns the response
 * @param endpoint - The endpoint you want to hit.
 * @returns The response from the API call.
 */

const get = async (endpoint) => {
  try {
    return await axios
      .get(`${process.env.API}/${endpoint}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    console.error(error);
  }
};

/**
 * It's an async function that returns a promise that resolves to the response of an axios get request
 * to the API endpoint with the params passed in as arguments
 * @param endpoint - The endpoint you want to hit.
 * @param params - The parameters that will be passed to the endpoint.
 * @returns The response from the API call.
 */

const getById = async (endpoint, params) => {
  try {
    return await axios
      .get(`${process.env.API}/${endpoint}/${params | null}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    console.error(error);
  }
};

/**
 * It takes an endpoint and params as arguments, and returns a promise that resolves to the response
 * from the API
 * @param endpoint - The endpoint you want to hit.
 * @param params - {
 * @returns The response from the API call.
 */

const post = async (endpoint, params) => {
  try {
    return await axios
      .post(`${process.env.API}/${endpoint}`, params)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    console.error(error);
  }
};

/**
 * It takes an endpoint, an id, and params, and then it makes a PUT request to the API with the
 * endpoint, id, and params
 * @param endpoint - The endpoint you want to hit.
 * @param id - The id of the resource you want to update.
 * @param params - the data you want to send to the server
 * @returns The response from the API.
 */

const put = async (endpoint, id, params) => {
  try {
    return await axios
      .put(`${process.env.API}/${endpoint}/${id}`, params)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    console.error(error);
  }
};

/**
 * It takes an endpoint and an id as arguments, and returns a promise that resolves to the response of
 * the axios delete request
 * @param endpoint - The endpoint you want to hit.
 * @param id - The id of the item you want to delete.
 * @returns The response from the server.
 */

const deleted = async (endpoint, id) => {
  try {
    return await axios
      .delete(`${process.env.API}/${endpoint}/${id}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { get, getById, post, put, deleted };