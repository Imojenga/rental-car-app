import css from './CarInfo.module.css';

const CarInfo = ({ car }) => {
  const {
    brand,
    model,
    year,
    address,
    mileage,
    rentalPrice,
    description,
    rentalConditions,
    type,
    fuelConsumption,
    engineSize,
    functionalities,
    accessories,
  } = car;

  const city = address.split(',')[1];
  const country = address.split(',')[2];

  return (
    <>
      <p className={css.title}>
        {brand}&nbsp;{model},&nbsp;{year}
      </p>
      <div className={css.wrp}>
        <svg width="12" height="15">
          <use href="/icons/icons.svg#icon-location"></use>
        </svg>
        <div className={css.location}>
          <p className={css.text}>
            {city},&nbsp;{country}
          </p>
          <p className={css.text}>
            Mileage:&nbsp;{mileage.toLocaleString('uk-UA')}&nbsp;km
          </p>
        </div>
      </div>
      <p className={css.price}>&#36;{rentalPrice}</p>
      <p className={css.text}>{description}</p>
      <div className={css.listsWrp}>
        <div>
          <p className={css.listTitle}>Rental Conditions:</p>
          <ul>
            {rentalConditions.map(item => (
              <li key={item}>
                <div className={css.wrp}>
                  <svg width="16" height="16">
                    <use href="/icons/icons.svg#icon-check"></use>
                  </svg>
                  <p className={css.text}>{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={css.listTitle}>Car Specifications:</p>
          <ul>
            <li>
              <div className={css.wrp}>
                <svg width="16" height="16">
                  <use href="/icons/icons.svg#icon-calendar"></use>
                </svg>
                <p className={css.text}>Year:&nbsp;{year}</p>
              </div>
            </li>
            <li>
              <div className={css.wrp}>
                <svg width="16" height="16">
                  <use href="/icons/icons.svg#icon-car"></use>
                </svg>
                <p className={css.text}>
                  Type:&nbsp;{type[0] + type.slice(1).toLowerCase()}
                </p>
              </div>
            </li>
            <li>
              <div className={css.wrp}>
                <svg width="16" height="16">
                  <use href="/icons/icons.svg#icon-fuel"></use>
                </svg>
                <p className={css.text}>
                  Fuel Consumption:&nbsp;{fuelConsumption}
                </p>
              </div>
            </li>
            <li>
              <div className={css.wrp}>
                <svg width="16" height="16">
                  <use href="/icons/icons.svg#icon-gear"></use>
                </svg>
                <p className={css.text}>Engine Size:&nbsp;{engineSize}</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p className={css.listTitle}>Accessories and functionalities:</p>
          <ul>
            {accessories.map(item => (
              <li key={item}>
                <div className={css.wrp}>
                  <svg width="16" height="16">
                    <use href="/icons/icons.svg#icon-check"></use>
                  </svg>
                  <p className={css.text}>{item}</p>
                </div>
              </li>
            ))}
            {functionalities.map(item => (
              <li key={item}>
                <div className={css.wrp}>
                  <svg width="16" height="16">
                    <use href="/icons/icons.svg#icon-check"></use>
                  </svg>
                  <p className={css.text}>{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
