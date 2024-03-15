import ButtonTemplate from '../Button/Button';
import { UserAddOutlined } from '@ant-design/icons';

const ContactForm = () => {
  return <ButtonTemplate btnTitle={'Add contact'} icon={<UserAddOutlined />} />;
};

export default ContactForm;
