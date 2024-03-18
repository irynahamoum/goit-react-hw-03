import ButtonTemplate from '../Button/Button';
import { UserAddOutlined } from '@ant-design/icons';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useId } from 'react';

const ContactForm = () => {
  const nameId = useId();
  const telephoneId = useId();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(5555);
    // form.reset();
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={css.contactForm}>
      <label className={css.label} htmlFor={nameId}>
        Name:
      </label>
      <input id={nameId} className={css.input} type="text" name="name" required />
      <label className={css.label} htmlFor={telephoneId}>
        Telephone Number:
      </label>
      <input id={telephoneId} className={css.input} type="tel" name="telephone number" required />
      <ButtonTemplate btnTitle={'Add contact'} icon={<UserAddOutlined />} />
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default ContactForm;
