import React from 'react';
import {
  styleReset,
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar,
} from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import logoIMG from '@/assets/logo.png';
/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

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

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppBar>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <div>
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
                    position: 'absolute',
                    left: '0',
                    top: '100%',
                  }}
                  onClick={() => setOpen(false)}
                >
                  <MenuListItem>
                    <span role="img" aria-label="👨‍💻">
                      👨‍💻
                    </span>
                    My Profile
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
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default App;
