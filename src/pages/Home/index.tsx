import { createFromIconfontCN, GithubOutlined } from '@ant-design/icons';
import { ReactNode, useEffect, useState } from 'react';
import React from 'react';
import * as Sakana from 'sakana';
import './index.less';
const ProgramShortCut = (props: {
  name: string;
  color: string;
  url: string;
  logoComponent: ReactNode;
}) => {
  return (
    <button
      className={
        'flex flex-col justify-center w-[5rem] aspect-square hover:shadow-md focus:shadow-inner'
      }
      onClick={() => {
        window.open(props.url, '_blank');
      }}
    >
      <div className={'w-full text-center'}>{props.logoComponent}</div>
      <span className={'w-full text-center'}>{props.name}</span>
    </button>
  );
};

const ChatGPTLOGO = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4269989_a7cr1eqkw3l.js', // 在 iconfont.cn 上生成
});
export default function Home() {
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
  return (
    <div className={'flex flex-row mx-10'}>
      <div className={'grid grid-cols-1 gap-4'}>
        <ProgramShortCut
          name={'Github'}
          url={'https://www.github.com/jamesishandsome'}
          color={'#000'}
          logoComponent={<GithubOutlined className={'text-5xl'} />}
        />
        <ProgramShortCut
          name={'ChatGPT'}
          url={'https://chat.james.ga'}
          color={'#000'}
          logoComponent={
            <ChatGPTLOGO type={'icon-chatgpt'} className={'text-5xl'} />
          }
        />
      </div>
    </div>
  );
}
