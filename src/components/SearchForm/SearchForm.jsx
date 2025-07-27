import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import css from './SearchForm.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import { setFilters, setPage } from '../../redux/catalog/slice';

const SearchForm = ({ brands, error, loading }) => {
  const dispatch = useDispatch();

  const [priceChosen, setPriceChosen] = useState(false);

  const prices = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];

  const handleSubmit = (values, actions) => {
    dispatch(setPage(1));
    dispatch(setFilters(values));
    actions.resetForm();
    setPriceChosen(false);
  };

  return (
    <Formik
      initialValues={{
        brand: '',
        rentalPrice: '',
        mileageFrom: '',
        mileageTo: '',
      }}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form className={css.form}>
          <div className={clsx(css.wrp, css.brandWrp)}>
            <label className={css.label} htmlFor="brand">
              Car brand
            </label>
            <Field className={css.input} as="select" name="brand" id="brand">
              {loading && (
                <option value="" disabled>
                  'Loading...'
                </option>
              )}
              {error && (
                <option value="" disabled>
                  'Plz reload...'
                </option>
              )}
              {brands.length > 0 && (
                <>
                  <option value="" disabled hidden>
                    Choose a brand
                  </option>
                  {brands.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </>
              )}
            </Field>
          </div>
          <div className={clsx(css.wrp, css.priceWrp)}>
            <label className={css.label} htmlFor="rentalPrice">
              Price/ 1 hour
            </label>
            {!priceChosen ? (
              <Field name="rentalPrice">
                {({ field, form }) => (
                  <select
                    {...field}
                    className={css.input}
                    id="rentalPrice"
                    onChange={e => {
                      form.setFieldValue('rentalPrice', e.target.value);
                      setPriceChosen(true);
                    }}
                  >
                    <option value="" disabled hidden>
                      Choose a price
                    </option>
                    {prices.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
            ) : (
              <input
                type="text"
                className={css.input}
                value={`To $${formik.values.rentalPrice}`}
                readOnly
                onClick={() => setPriceChosen(false)}
              />
            )}
          </div>
          <div className={css.wrp}>
            <p className={css.label}>Сar mileage / km</p>
            <div className={css.div}>
              <div className={css.inputs}>
                <div className={css.custom}>
                  <span className={css.span}>From</span>
                  <Field
                    className={clsx(css.input, css.inputFrom)}
                    name="mileageFrom"
                  />
                </div>
                <div className={css.custom}>
                  <span className={css.span}>To</span>
                  <Field
                    className={clsx(css.input, css.inputTo)}
                    name="mileageTo"
                  />
                </div>
              </div>
              <button className={css.btn} type="submit">
                Search
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
