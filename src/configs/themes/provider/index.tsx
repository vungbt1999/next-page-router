import React, { createContext, useCallback, useEffect, useState } from 'react';
import { UIConfig, ScreenConfigKey, Screen, ScreenConfig } from '..';

const initSizes = {
  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  '2xl': false,
  '3xl': false
};

export const getStyle = (uiConfig: UIConfig) => {
  let configStyle: any = {
    // --- COLOR ---
    '--color-primary': uiConfig.colors.primary.default,
    '--color-secondary': uiConfig.colors?.secondary?.default,
    '--color-tertiary': uiConfig.colors?.tertiary?.default,
    '--color-brand': uiConfig.colors?.brand?.default,
    '--color-brand-100': uiConfig.colors?.brand?._100,
    '--color-invert': uiConfig.colors?.invert?.default,
    '--color-error': uiConfig.colors?.error?.default,
    '--color-success': uiConfig.colors?.success?.default,
    '--color-surface-primary': uiConfig.colors?.surfacePrimary?.default,
    '--color-surface-secondary': uiConfig.colors?.surfaceSecondary?.default,
    '--color-surface-tertiary': uiConfig.colors?.surfaceTertiary?.default,
    '--color-surface-brand': uiConfig.colors?.surfaceBrand?.default,
    '--color-surface-invert': uiConfig.colors?.surfaceInvert?.default,
    '--color-surface-error': uiConfig.colors?.surfaceError?.default,
    '--color-surface-success': uiConfig.colors?.surfaceSuccess?.default,
    '--color-surface-accent': uiConfig.colors?.surfaceAccent?.default,

    // --- FONT ---
    '--font-primary': uiConfig.font.primary
  };

  if (uiConfig.font.secondary) {
    configStyle = {
      ...configStyle,
      '--font-secondary': uiConfig.font.secondary
    };
  }
  if (uiConfig.font.tertiary) {
    configStyle = {
      ...configStyle,
      '--font-tertiary': uiConfig.font.tertiary
    };
  }

  return configStyle;
};

export type UIContextType = {
  theme: UIConfig;
  setTheme: (_theme: Partial<UIConfig>) => void;
  screen: Screen;
};

const initState: UIContextType = {
  theme: {
    colors: {
      primary: {
        default: ''
      }
    },
    font: {
      primary: 'sans-serif, serif, monospace, cursive'
    }
  },
  setTheme: (_theme: Partial<UIConfig>) => {},
  screen: {
    width: 0,
    height: 0,
    isMobile: true,
    sizes: initSizes
  }
};
const UIContext = createContext<UIContextType>(initState);

export type ThemeProviderProps = {
  config: UIConfig;
  children: JSX.Element | React.ReactNode;
};

export function UIProvider(props: Readonly<ThemeProviderProps>) {
  const [themeState, setThemeState] = useState<UIConfig>(props.config);
  const [screen, setScreen] = useState(initState.screen);

  const setTheme = useCallback((newTheme: Partial<UIConfig>) => {
    setThemeState((theme) => ({ ...theme, ...newTheme }));
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const { innerWidth: width, innerHeight: height } = window;
        const newSizes = { ...initSizes };
        Object.keys(ScreenConfig).forEach((key) => {
          const newKey = key as ScreenConfigKey;
          if (ScreenConfig[newKey] <= innerWidth) {
            newSizes[newKey] = true;
          } else {
            newSizes[newKey] = false;
          }
        });
        setScreen({ sizes: newSizes, width, height, isMobile: !newSizes.md });
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <UIContext.Provider value={{ theme: themeState, screen, setTheme }}>
      <main style={getStyle(themeState)} className="h-screen">
        {themeState?.stylesheets?.map((stylesheet, index) => (
          <link key={index} rel="stylesheet" href={stylesheet} />
        ))}
        {props.children}
      </main>
    </UIContext.Provider>
  );
}

export const useUI = () => React.useContext(UIContext);
