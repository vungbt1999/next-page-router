import { ReactNode } from 'react';
import HeaderLayout, { HeaderProps } from './header';

type EmployeeLayoutProps = {
  children: ReactNode;
  header: HeaderProps;
};
export default function EmployeeLayout({ children, header }: EmployeeLayoutProps) {
  return (
    <div>
      <HeaderLayout {...header} />
      <main>
        <h1>EmployeeLayout</h1>
        {children}
      </main>
      <footer>{/* Your footer content */}</footer>
    </div>
  );
}
