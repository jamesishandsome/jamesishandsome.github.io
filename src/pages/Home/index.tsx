import { createFromIconfontCN, GithubOutlined } from '@ant-design/icons';
import { ReactNode, useState } from 'react';
import React from 'react';
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
