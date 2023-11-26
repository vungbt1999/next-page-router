import { ReactNode } from 'react';
import HeaderLayout, { HeaderProps } from './header';

type AdminLayoutProps = {
  children: ReactNode;
  header: HeaderProps;
};
export default function AdminLayout({ children, header }: Readonly<AdminLayoutProps>) {
  return (
    <div>
      <HeaderLayout {...header} />
      <main>
        <h1>AdminLayout</h1>
        {children}
      </main>
      <footer>{/* Your footer content */}</footer>
    </div>
  );
}
