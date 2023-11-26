import { ButtonBase } from '@/components/form-base';
import { SEO } from '@/components/seo';
import { withTranslations } from '@/middleware/withSSTranslations';
import { signOut, useSession } from 'next-auth/react';
import { Fragment } from 'react';

export default function HomePage() {
  const { data: session } = useSession();
  console.log('session====>', session);
  return (
    <Fragment>
      <SEO />
      <h1>Home Page</h1>
      {session && <ButtonBase label="Logout" onClick={() => signOut()} />}
    </Fragment>
  );
}

HomePage.withPageLayout = true;
export const getStaticProps = withTranslations();
