import { useNavigate } from 'react-router-dom';
import css from './Banner.module.css';

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.wrp}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <button className={css.btn} onClick={handleClick}>
        View Catalog
      </button>
    </div>
  );
};

export default Banner;
