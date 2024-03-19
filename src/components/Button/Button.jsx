import { Button, Flex } from 'antd';

const ButtonTemplate = ({ btnTitle, icon, handleDelete }) => {
  return (
    <Flex gap="small" vertical>
      <Flex wrap="wrap" gap="small">
        <Button type="primary" onClick={handleDelete} htmlType={handleDelete ? 'button' : 'submit'}>
          {icon}
          {btnTitle}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ButtonTemplate;
