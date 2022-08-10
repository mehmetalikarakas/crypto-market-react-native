export const fetchData = () => {
  return fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "362665df-9a7a-419f-881b-5928b0cf7fba",
      },
    }
  );
};
