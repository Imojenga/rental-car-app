import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarById,
  selectError,
  selectLoading,
} from '../redux/catalog/selectors';
import CarImage from '../components/CarImage/CarImage';
import BookForm from '../components/BookForm/BookForm';
import CarInfo from '../components/CarInfo/CarInfo';
import css from './DetailsPage.module.css';
import { fetchCarById } from '../redux/catalog/operations';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Loader from '../components/Loader/Loader';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectCarById);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <main>
      <Container>
        {loading && <Loader />}
        {error && <p>Plz reload...</p>}
        {car && (
          <div className={css.wrp}>
            <div className={css.colLeft}>
              <Toaster position="top-left" reverseOrder={false} />
              <CarImage car={car} />
              <BookForm />
            </div>
            <div className={css.colRight}>
              <CarInfo car={car} />
            </div>
          </div>
        )}
      </Container>
    </main>
  );
};

export default DetailsPage;
