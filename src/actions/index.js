export const fetchProducts = () => {
  return async dispatch => {
    const responseFetch = await fetch(`products.json`);
    const response = await responseFetch.json();
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: response.products
    });
  };
};

export const compare = product => {
  return dispatch => {
    dispatch({
      type: "COMPARE_PRODUCT",
      product
    });
  };
};
