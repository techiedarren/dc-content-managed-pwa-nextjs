import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import { GlobalStyle, WithTheme } from '../components';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(storyFn => <>
  <WithTheme>
    <GlobalStyle />
    {storyFn()}
  </WithTheme>
</>);