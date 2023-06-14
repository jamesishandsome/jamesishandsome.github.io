import {
  Button,
  Frame,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  TextInput,
} from 'react95';
import styled from 'styled-components';
import './index.css';
import { useState } from 'react';
import axios from 'axios';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};

  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }

    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .window {
    width: 400px;
    min-height: 200px;
  }

  .window:nth-child(2) {
    margin: 2rem;
  }

  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;
const Profile = (props: { open: boolean; callback: void }) => {
  const { open, callback } = props;
  const [password, setPassword] = useState('');
  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <Wrapper>
      {open && (
        //   put the words at the middle of Window
        <>
          {' '}
          <Window
            className={'window'}
            style={{ textAlign: 'center', fontSize: '1.5rem' }}
          >
            <WindowHeader
              style={{ fontSize: '1rem' }}
              className={'window-title'}
            >
              My Profile
            </WindowHeader>
            {/*<Toolbar>*/}
            {/*  <Button variant="menu" size="sm">*/}
            {/*    Save*/}
            {/*  </Button>*/}
            {/*  <Button*/}
            {/*    variant="menu"*/}
            {/*    size="sm"*/}
            {/*    onClick={() => {*/}
            {/*      callback();*/}
            {/*      console.log(open);*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    Edit*/}
            {/*  </Button>*/}
            {/*</Toolbar>*/}
            Please download my resume by inputting the password.
            <div style={{ display: 'flex' }}>
              <TextInput
                value={password}
                placeholder="Type here..."
                onChange={inputPassword}
                fullWidth
              />
              <Button
                style={{ marginLeft: 4 }}
                onClick={async () => {
                  await axios.post('http://api.james.ga/', {
                    password,
                  });
                }}
              >
                Download
              </Button>
            </div>
          </Window>
        </>
      )}
    </Wrapper>
  );
};

export { Profile };
