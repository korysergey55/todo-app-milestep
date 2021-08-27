export const filterSelector = (state) => state.filter.filter;

export const getProductsFilterSelector = (state, category = "phones") =>
 state.products.items[category].filter((product) =>
  product?.name.toLowerCase().includes(state.filter?.filter.toLowerCase())
 );
