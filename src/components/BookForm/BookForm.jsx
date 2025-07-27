import { Field, Form, Formik } from 'formik';
import css from './BookForm.module.css';
import toast from 'react-hot-toast';

const handleSubmit = actions => {
  toast.success('Successfully booked the car!');
  actions.resetForm();
};

const BookForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', date: '', comment: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrp}>
          <p className={css.title}>Book your car now</p>
          <p className={css.text}>
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <div className={css.inputsWrp}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <Field
            className={css.input}
            type="date"
            name="date"
            placeholder="Booking date"
          />
          <Field
            className={css.input}
            as="textarea"
            name="comment"
            placeholder="Comment"
            rows="3"
          />
        </div>
        <button className={css.btn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default BookForm;
