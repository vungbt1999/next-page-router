import { withTranslations } from '@/middleware/withSSTranslations';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return <div>{t('testPreload')}</div>;
}

export const getStaticProps = withTranslations();
