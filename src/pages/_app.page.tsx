import { SEO, SEOData } from '@/components/seo';
import { UIProvider, themeConfig } from '@/configs/themes';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { SSRConfig, appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import '@/styles/globals.scss';

type MyAppProps = {
  pageProps: SSRConfig;
  seo: SEOData;
  session: Session | null;
} & AppProps;

const DefaultLayout = ({ children }: any) => <Fragment>{children}</Fragment>;

function MyApp({ Component, pageProps, seo, session }: MyAppProps) {
  const Layout = (Component as any).withPageLayout ? DefaultLayout : DefaultLayout;
  const headerMock = {
    navigation: [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Catalog',
        url: '/#'
      },
      {
        title: 'Shop',
        url: '/#'
      },
      {
        title: 'Pages',
        url: '/#'
      },
      {
        title: 'Blog',
        url: '/#'
      },
      {
        title: 'Docs',
        url: '/#'
      }
    ]
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <SessionProvider session={session}>
      <UIProvider config={themeConfig}>
        <Layout header={headerMock}>
          {seo && <SEO {...seo} />}
          {isClient && <Component {...pageProps} />}
        </Layout>
      </UIProvider>
    </SessionProvider>
  );
}

export default appWithTranslation<MyAppProps>(MyApp);
