import React from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import white from 'react95/dist/themes/white';
const KnowMe = (props: { open: boolean; close: () => void }) => {
  if (!props.open) return null;
  else {
    return (
      <ThemeProvider theme={white}>
        <div
          className={
            'w-5/6 h-5/6 fixed inset-1/2 bg-black -translate-x-2/4 -translate-y-2/4 z-50'
          }
        >
          <Window className={'w-full h-full'}>
            <WindowHeader className={'window-title'}>
              <span>Know Me</span>
              <button className={'float-right'} onClick={props.close}>
                x
              </button>
            </WindowHeader>
            <WindowContent className={'h-full w-full'}>
              <div
                className={
                  'w-full h-full flex flex-col justify-evenly items-center px-10'
                }
              >
                <p className={'text-6xl'}>
                  Hi! I haven't finished this page yet!
                </p>
                <p className={'text-4xl'}>
                  This used to be a 'Virtual Me' chatbot, but due to some
                  complicated reason, I am refactoring it. Please come back
                  later!
                </p>
              </div>
            </WindowContent>
          </Window>
        </div>
      </ThemeProvider>
    );
  }
};

export { KnowMe };
