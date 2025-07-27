import SearchForm from '../components/SearchForm/SearchForm';
import Container from '../components/Container/Container';
import CarList from '../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectError,
  selectLoading,
  selectBrands,
  selectFilters,
  selectPage,
  selectHasMore,
} from '../redux/catalog/selectors';
import { useEffect } from 'react';
import { fetchCars, fetchBrands } from '../redux/catalog/operations';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import { setPage } from '../redux/catalog/slice';
import Loader from '../components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const brands = useSelector(selectBrands);
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(fetchCars({ filters, page }));
    dispatch(fetchBrands());
  }, [dispatch, filters, page]);

  const handleClick = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <main>
      <Container>
        <SearchForm brands={brands} error={error} loading={loading} />
        {loading && <Loader />}
        {error && <p>Plz reload...</p>}
        {cars.length > 0 && <CarList cars={cars} />}
        {hasMore && <LoadMoreBtn onClick={handleClick} />}
      </Container>
    </main>
  );
};

export default CatalogPage;
