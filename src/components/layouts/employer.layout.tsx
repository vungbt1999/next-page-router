import { ReactNode } from 'react';
import HeaderLayout, { HeaderProps } from './header';

type EmployerLayoutProps = {
  children: ReactNode;
  header: HeaderProps;
};
export default function EmployerLayout({ children, header }: EmployerLayoutProps) {
  return (
    <div>
      <HeaderLayout {...header} />
      <main>
        <h1>EmployerLayout</h1>
        {children}
      </main>
      <footer>{/* Your footer content */}</footer>
    </div>
  );
}
