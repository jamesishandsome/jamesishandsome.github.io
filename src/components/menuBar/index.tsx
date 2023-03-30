import React from 'react';
import { styleReset,AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
  Toolbar } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
<AppBar>
<Toolbar style={{ justifyContent: 'space-between' }}>
  <div>
    <Button>
          <MenuList>
        <MenuListItem>Item 1</MenuListItem>
        <MenuListItem>Item 2</MenuListItem>
        <MenuListItem>Item 3</MenuListItem>
        <Separator />
        <MenuListItem>Item 4</MenuListItem>
      </MenuList>
    </Button>
    </div>  
    </Toolbar>
  </AppBar>
    </ThemeProvider>
  </div>
);

export default App;