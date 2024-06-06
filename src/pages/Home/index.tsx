import {
  createFromIconfontCN,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { ReactNode, useEffect, useState } from 'react';
import React from 'react';
// @ts-ignore
import * as Sakana from 'sakana';
import './index.less';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import { Dialog } from '@headlessui/react';
import { KnowMe } from '@/pages/Home/components/knowMe';
import { animations } from '@formkit/drag-and-drop';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
const ProgramShortCut = (props: {
  name: string;
  color: string;
  url: string;
  logoComponent: ReactNode;
  disabled?: boolean;
  callback?: () => void;
}) => {
  const callback = props.callback || (() => {});
  return (
    <button
      className={
        'flex flex-col justify-center w-[5rem] aspect-square hover:shadow-md focus:shadow-inner '
      }
      onClick={() => {
        if (props.disabled) {
          callback();
          return;
        }
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
  const [open, setOpen] = useState(false);
  const [openKnowMyself, setOpenKnowMyself] = useState(false);
  useEffect(() => {
    Sakana.setMute(true);
    Sakana.init({
      el: '.sakana-box', // 启动元素 node 或 选择器
      scale: 0.5, // 缩放倍数
      inertia: 0.01, // 惯性
      decay: 0.99, // 衰减
      r: 0, // 启动角度
      y: 10, // 启动高度
      translateY: 0, // 位移高度
      canSwitchCharacter: false, // 允许换角色
    });
  }, []);

  const [parent, icons] = useDragAndDrop(['github', 'linkedin'], {
    plugins: [animations()],
  });

  const iconList = [
    {
      name: 'github',
      url: 'https://www.github.com/jamesishandsome',
      logo: <GithubOutlined className={'text-5xl'} />,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yaotian-hu-b8059512a/',
      logo: <LinkedinOutlined className={'text-5xl'} />,
    },
  ];
  return (
    <div>
      {/*at middle*/}

      {open && (
        <Window
          className={'!absolute top-20 left-1/2 transform -translate-x-1/2'}
        >
          <WindowHeader className={'window-title'}>
            <span>ChatGPT</span>
          </WindowHeader>
          <WindowContent>
            Sorry, my ChatGPT website is under maintenance for now.
            <br />
            <Button onClick={() => setOpen(false)}>OK</Button>
          </WindowContent>
        </Window>
      )}

      <div className={'flex flex-row mx-10 pt-20'}>
        <div className={'grid grid-cols-1 gap-4'}>
          <ul ref={parent}>
            {icons.map((icon) => (
              <li className="cassette" data-label={icon} key={icon}>
                {iconList.map((item) => {
                  if (item.name === icon) {
                    return (
                      <ProgramShortCut
                        key={item.name}
                        name={item.name}
                        url={item.url}
                        color={'#000'}
                        logoComponent={item.logo}
                      />
                    );
                  }
                })}
              </li>
            ))}
          </ul>
        </div>
        <div className={'flex flex-col justify-center items-center'}>
          <div className={'text-2xl'}>👈 Try drag and drop the icons!</div>
        </div>
      </div>
      <div
        className={'flex flex-col justify-center items-center w-full h-full'}
      >
        <h1 className={'text-6xl'}>Hi! Welcome to my Page!</h1>
        <div className={'my-20 text-4xl'}>Want to know more about me?</div>
        <Button
          onClick={() => {
            setOpenKnowMyself(true);
          }}
          size={'lg'}
        >
          Know More About Me
        </Button>
      </div>
      <KnowMe
        open={openKnowMyself}
        close={() => {
          setOpenKnowMyself(false);
        }}
      />
    </div>
  );
}
