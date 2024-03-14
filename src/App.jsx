import './App.css';
import Title from './components/Title/Title';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

function App() {
  return (
    <div className="wrap">
      <Title />
      <Flex gap="small" vertical>
        <Flex wrap="wrap" gap="small">
          <Button type="primary" color={'#26b6f9'} icon={<SearchOutlined />}>
            Search
          </Button>
          <Button type="primary">Add contact</Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
