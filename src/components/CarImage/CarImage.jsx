import css from './CarImage.module.css';

const CarImage = ({ car }) => {
  return (
    <div className={css.thumb}>
      <img src={car.img} alt={car.description} />
    </div>
  );
};

export default CarImage;
