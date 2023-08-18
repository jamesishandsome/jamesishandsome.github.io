import { CheckCard } from '@ant-design/pro-components';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { Button, Col, Row } from 'antd';
import * as Sakana from 'sakana';
import { useEffect } from 'react';
import './index.less';
function App() {
  useEffect(() => {
    Sakana.setMute(true);
    Sakana.init({
      el: '.sakana-box', // 启动元素 node 或 选择器
      scale: 0.5, // 缩放倍数
      inertia: 0.01, // 惯性
      decay: 0.99, // 衰减
      r: 0, // 启动角度
      y: 10, // 启动高度
      scale: 0.5, // 缩放倍数
      translateY: 0, // 位移高度
      canSwitchCharacter: false, // 允许换角色
    });
  }, []);

  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://lunch-api.james.ga/restaurants',
      );
      return data;
    },
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error;
  if (data) console.log(data);
  return (
    <>
      <div className={'flex flex-col items-center justify-around h-96'}>
        <div>What to have today</div>
        <CheckCard.Group onChange={(value) => {}}>
          <Row className={'max-w-5xl'}>
            {data.map((item: any) => (
              <Col key={item.id} span={8}>
                <CheckCard value={item.id} title={item.name}></CheckCard>
              </Col>
            ))}
          </Row>
        </CheckCard.Group>
        <Button type={'primary'}>Vote!</Button>
      </div>
    </>
  );
}

export default App;
