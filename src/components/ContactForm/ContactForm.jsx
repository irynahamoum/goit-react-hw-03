import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import ButtonTemplate from '../Button/Button';
import { UserAddOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, 'The name is too Short!').max(10, 'The name is too Long!').required('Required'),
  number: Yup.string().min(7, 'The number is too Short!').max(7, 'The number is too Long!').required('Required'),
});

const ContactForm = ({ addContact }) => {
  const nameLabelId = useId();
  const telephoneLabelId = useId();
  const categoryId = useId();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    values.id = Date.now();
    addContact(values);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        category: 'none',
        id: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.contactForm}>
          <label htmlFor={nameLabelId} className={css.label}>
            Name:
          </label>
          <Field id={nameLabelId} type="text" className={css.input} name="name" required />
          {touched.name && errors.name && <div className={css.errorMessage}>{errors.name}</div>}
          <label htmlFor={telephoneLabelId} className={css.label}>
            Telephone:
          </label>
          <Field id={telephoneLabelId} type="tel" className={css.input} name="number" required />
          {touched.number && errors.number && <div className={css.errorMessage}>{errors.number}</div>}
          <label htmlFor={categoryId} className={css.label}>
            Category:
          </label>
          <Field className={css.input} id={categoryId} name="category" as="select" required>
            <option value="None">None</option>
            <option value="Work">Work</option>
            <option value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="Other">Other</option>
          </Field>
          <ButtonTemplate btnTitle={'Add contact'} icon={<UserAddOutlined />} />
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default ContactForm;
