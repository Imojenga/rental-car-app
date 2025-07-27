import css from './CarList.module.css';
import Car from '../Car/Car';

const CarList = ({ cars }) => {
  return (
    <ul className={css.list}>
      {cars.map(item => (
        <li className={css.item} key={item.id}>
          <Car car={item} />
        </li>
      ))}
    </ul>
  );
};

export default CarList;
