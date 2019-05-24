const initialState = {
  products: []
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload.map(product => ({
          ...product,
          compare: false
        }))
      };
    case "COMPARE_PRODUCT":
      return {
        ...state,
        products: state.products.map(product => {
          return product.id === action.product.id
          ? { ...product, compare: !product.compare } //inverse of compare
          : product;
        })
      };
    default:
      return state;
  }
};

export default ProductsReducer;
