import { Button, Flex } from 'antd';

const ButtonTemplate = ({ btnTitle, icon }) => {
  return (
    <Flex gap="small" vertical>
      <Flex wrap="wrap" gap="small">
        <Button type="primary">
          {icon}
          {btnTitle}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ButtonTemplate;
