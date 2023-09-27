import { Link, Outlet } from '@umijs/max';
import React, { useEffect } from 'react';
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
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { StyleProvider } from '@ant-design/cssinjs';
import mojs from '@mojs/core';
import { API } from '@/api';
import axios from 'axios';
const queryClient = new QueryClient();
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

const LikeCount = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['like'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://james-like.huyaotian881600.workers.dev/count',
      );
      return data;
    },
  });
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error;
  if (data) console.log(data);
  return (
    <div style={{ width: 150, cursor: 'default' }}>
      I have got {data['COUNT (*)']} likes
    </div>
  );
};
const LikeButton = () => {
  const addLikeCount = useMutation({
    mutationFn: (newTodo) =>
      axios.get('https://james-like.huyaotian881600.workers.dev/like'),
    // When mutate is called:
    onMutate: async () => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['like'] });

      // Snapshot the previous value
      const previousLike = queryClient.getQueryData(['like']);

      return { previousLike };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, variables, context) => {
      if (context?.previousLike) {
        queryClient.setQueryData(['like'], context.previousLike);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['like'] });
    },
  });
  class Star extends mojs.CustomShape {
    getShape() {
      return '<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />';
    }
  }

  mojs.addShape('star', Star);

  const RADIUS = 28;
  const circle = new mojs.Shape({
    left: 0,
    top: 0,
    stroke: 'red',
    strokeWidth: { [2 * RADIUS]: 0 },
    fill: 'none',
    scale: { 0: 1, easing: 'quad.out' },
    radius: RADIUS,
    duration: 450,
  });
  const star = new mojs.Shape({
    left: 0,
    top: 0,
    shape: 'star',
    fill: 'red',
    scale: { 0: 1 },
    easing: 'elastic.out',
    isShowEnd: false,
    duration: 400,
    delay: 300,
    radius: RADIUS / 2.35,
  });
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 6: RADIUS - 3 },
    angle: 45,
    children: {
      shape: 'star',
      radius: RADIUS / 2.2,
      fill: 'red',
      degreeShift: 'stagger(0,-5)',
      duration: 700,
      delay: 200,
      easing: 'quad.out',
      // delay:        100,
    },
  });
  const timeline = new mojs.Timeline({ speed: 1.5 });

  timeline.add(burst, circle, star);
  return (
    <Item
      onClick={(e) => {
        const coords = { x: e.event.pageX, y: e.event.pageY };
        burst.tune(coords);
        circle.tune(coords);
        star.tune(coords);
        timeline.replay();
        addLikeCount.mutate();
      }}
    >
      <Space>
        <LikeOutlined />
        Like
      </Space>
    </Item>
  );
};
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
                <div className={'flex flex-row'}>
                  <LikeCount />
                  <div style={{ width: 150, cursor: 'default' }}>{time}</div>
                </div>
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
            <LikeButton />
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
