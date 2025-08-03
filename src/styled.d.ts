import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      border: string;
    };
    fonts: {
      main: string;
      heading: string;
      size: {
        base: string;
        h1: string;
        h2: string;
      };
    };
    spacing: {
      container: string;
      gap: string;
      padding: string;
      margin: string;
    };
    layout: {
      type: 'minimal' | 'sidebar' | 'card-grid';
      headerHeight: string;
      sidebarWidth?: string;
    };
    components: {
      button: {
        padding: string;
        borderRadius: string;
      };
    };
  }
}