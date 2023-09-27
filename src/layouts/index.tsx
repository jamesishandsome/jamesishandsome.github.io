import { Link, Outlet } from '@umijs/max';
import styles from './index.less';
import React from 'react';
import {
  styleReset,
  AppBar,
  Button,
  MenuList,
  Separator,
  MenuListItem,
  TextInput,
  Toolbar,
} from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import logoIMG from '@/assets/logo.png';
/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';
import dayjs from 'dayjs';
import { Menu, Item, Submenu, useContextMenu } from 'react-contexify';
import 'react-contexify/ReactContexify.css';
const MENU_ID = 'blahblah';
/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { Profile } from '@/components/profile';
import chatgptLogo from '@/assets/open-ai-seeklogo.com.svg';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleProvider } from '@ant-design/cssinjs';
const GlobalStyles = createGlobalStyle`
  ${styleReset}

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }

  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

export default function Layout() {
  const [open, setOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const { show } = useContextMenu({
    id: MENU_ID,
  });
  function handleContextMenu(event: any) {
    show({
      event,
      props: {
        key: 'value',
      },
    });
  }
  const handleItemClick = ({ id, event, props }) => {
    switch (id) {
      case 'copy':
        console.log(event, props);
        break;
      case 'cut':
        console.log(event, props);
        break;
      //etc...
    }
  };
  const [time, setTime] = React.useState(dayjs().format('ddd D MMM h:mm A'));
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format('ddd D MMM h:mm A'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StyleProvider hashPriority="high">
        <div
          onContextMenu={handleContextMenu}
          style={{
            width: '100vw',
            height: '100vh',
            background: 'rgb(0, 128, 128)',
            zIndex: -1,
          }}
        >
          <GlobalStyles />
          <ThemeProvider theme={original}>
            <AppBar>
              <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <Button
                    style={{ fontWeight: 'bold' }}
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <img
                      src={logoIMG}
                      alt="react95 logo"
                      style={{ height: '20px', marginRight: 4 }}
                    />
                    Start
                  </Button>
                  {open && (
                    <MenuList
                      style={{
                        zIndex: 999,
                        position: 'absolute',
                        left: '0',
                        top: '100%',
                      }}
                      onClick={() => setOpen(false)}
                    >
                      <MenuListItem
                        onClick={() => {
                          setProfileOpen(true);
                        }}
                      >
                        <span role="img" aria-label="👨‍💻">
                          👨‍💻
                        </span>
                        My Profile
                      </MenuListItem>
                      <MenuListItem
                        onClick={() => {
                          window.open('http://chat.james.ga', '_blank');
                        }}
                      >
                        <img
                          src={chatgptLogo}
                          alt="ChatGPT"
                          style={{ height: '20px', marginRight: 4 }}
                        />
                        ChatGPT
                      </MenuListItem>
                      <Separator />
                      <MenuListItem
                        onClick={() => {
                          //     close this tab in browser
                          window.close();
                          1;
                        }}
                      >
                        <span role="img" aria-label="🔙">
                          🔙
                        </span>
                        Exit
                      </MenuListItem>
                    </MenuList>
                  )}
                </div>
                <div style={{ width: 150, cursor: 'default' }}>{time}</div>
              </Toolbar>
            </AppBar>
            <Profile
              open={profileOpen}
              // @ts-ignore
              callback={() => {
                setProfileOpen(!profileOpen);
              }}
            />
          </ThemeProvider>
          <Menu id={MENU_ID}>
            <Separator />
            <Item
              id="reload"
              onClick={() => {
                window.location.reload();
              }}
            >
              Reload
            </Item>
            <Separator />
            <Item>
              <Space>
                <LikeOutlined />
                Like
              </Space>
            </Item>
            <Separator />
            <Item disabled>
              <Space>
                <DislikeOutlined />
                Dislike
              </Space>
            </Item>
            <Separator />
          </Menu>
          <Outlet />
          <div className="sakana-box "></div>
        </div>
      </StyleProvider>
    </QueryClientProvider>
  );
}
