import type { ThemeOverride, StyleOverride } from '../types';
import React, { Component } from 'react';
import ContextProvider from '../components/ContextProvider/ContextProvider';
import { Provider as LocalisationProvider } from '@dlghq/react-l10n';

function withContext(
  ChildComponent: *,
  theme: ThemeOverride,
  style: StyleOverride,
  locale: string,
  messages: Object,
  globalValues: Object
) {
  return class extends Component<Props> {
    static displayName = `Context(${ChildComponent.displayName ||
      ChildComponent.name})`;

    render() {
      return (
        <LocalisationProvider
          locale={locale}
          messages={messages}
          globalValues={globalValues}
        >
          <ContextProvider theme={theme} style={style}>
            <ChildComponent {...this.props} />
          </ContextProvider>
        </LocalisationProvider>
      );
    }
  };
}

export default withContext;
