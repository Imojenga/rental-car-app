import { useNavigate } from 'react-router-dom';
import css from './Car.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/catalog/selectors';
import { addToFavorites } from '../../redux/catalog/slice';

const Car = ({ car }) => {
  const {
    id,
    img,
    brand,
    model,
    year,
    description,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const city = address.split(',')[1];
  const country = address.split(',')[2];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${id}`);
  };

  const handleFavorites = () => {
    dispatch(addToFavorites(id));
  };

  return (
    <>
      <div className={css.thumb}>
        <img className={css.img} src={img} alt={description} />
        <svg
          className={css.heart}
          width="16"
          height="15"
          onClick={handleFavorites}
        >
          <use href="/icons/icons.svg#icon-heart-empty"></use>
        </svg>
        {isFavorite && (
          <svg className={css.heart} width="16" height="15">
            <use href="/icons/icons.svg#icon-heart-full"></use>
          </svg>
        )}
      </div>
      <div>
        <div className={css.info}>
          <p>
            {brand}
            <span className={css.accent}>&nbsp;{model},</span>&nbsp;{year}
          </p>
          <p>&#36;{rentalPrice}</p>
        </div>
        <p className={css.desc}>
          {city}
          <span className={css.stroke}>&nbsp;|&nbsp;</span>
          {country}
          <span className={css.stroke}>&nbsp;|&nbsp;</span>
          {rentalCompany}
          <span className={css.stroke}>&nbsp;|</span>
        </p>
        <p className={css.desc}>
          {type[0] + type.slice(1).toLowerCase()}
          <span className={css.stroke}>&nbsp;|&nbsp;</span>
          {mileage.toLocaleString('uk-UA')}&nbsp;km
        </p>
      </div>
      <button className={css.btn} onClick={handleClick}>
        Read more
      </button>
    </>
  );
};

export default Car;
