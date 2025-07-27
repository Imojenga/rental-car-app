export const selectCars = state => state.cars.items;
export const selectLoading = state => state.cars.loading;
export const selectError = state => state.cars.error;
export const selectHasMore = state => state.cars.hasMore;

export const selectBrands = state => state.cars.brands;

export const selectCarById = state => state.cars.car;

export const selectFavorites = state => state.cars.favorites;
export const selectFilters = state => state.cars.filters;
export const selectPage = state => state.cars.page;
