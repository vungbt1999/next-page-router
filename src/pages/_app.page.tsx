import { SEO, SEOData } from '@/components/seo';
import { UIProvider, themeConfig } from '@/configs/themes';
import { Session } from 'next-auth';
import { SessionProvider, getSession } from 'next-auth/react';
import { SSRConfig, appWithTranslation } from 'next-i18next';
import App, { AppProps } from 'next/app';
import { Fragment, useEffect, useMemo, useState } from 'react';
import '@/styles/globals.scss';
import { EUserRole } from '@/types';
import dynamic from 'next/dynamic';
import { layoutsMock } from '@/@mocks';
import localStorageUtils, { EKeyStorage } from '@/utils/local-storage.utils';

const EmployerLayout = dynamic(() => import('../components/layouts/employer.layout'));
const EmployeeLayout = dynamic(() => import('../components/layouts/employee.layout'));
const AdminLayout = dynamic(() => import('../components/layouts/admin.layout'));

type MyAppProps = {
  pageProps: SSRConfig;
  seo: SEOData;
  session: Session | null;
} & AppProps;

const DefaultLayout = ({ children }: any) => <Fragment>{children}</Fragment>;
const MainLayout = (role: EUserRole) => {
  let Layout;
  switch (role) {
    case 'employer':
      Layout = EmployerLayout;
      break;
    case 'employee':
      Layout = EmployeeLayout;
      break;
    default:
      Layout = AdminLayout;
  }
  return Layout;
};

function MyApp({ Component, pageProps, seo, session }: MyAppProps) {
  const role = (localStorageUtils.get(EKeyStorage.ROLE) as EUserRole) ?? EUserRole.Employee;
  const Layout = (Component as any).withPageLayout ? MainLayout(role) : DefaultLayout;
  const header = useMemo(() => {
    if (role === EUserRole.Admin)
      return {
        navigation: layoutsMock.navigation.auth.admin,
        heroBackground: '/assets/background/hero-employer.png',
        role
      };
    if (role === EUserRole.Employee)
      return {
        navigation: layoutsMock.navigation.employee,
        heroBackground: '/assets/background/hero-employer.png',
        role
      };
    return {
      navigation: layoutsMock.navigation.employer,
      heroBackground: '/assets/background/hero-jobseeker.png',
      role
    };
  }, [role]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <SessionProvider session={session}>
      <UIProvider config={themeConfig}>
        <Layout header={header}>
          {seo && <SEO {...seo} />}
          {isClient && <Component {...pageProps} />}
        </Layout>
      </UIProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    seo: {
      title: 'Jobcadu Next App',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      image: {
        url: 'https://storage.googleapis.com/doscms.metados.com/assets/logo_mini_07e4537257/logo_mini_07e4537257.png'
      },
      keywords: 'Jobcadu Next App'
    },
    session: await getSession(appContext.ctx)
  };
};

export default appWithTranslation<MyAppProps>(MyApp);
