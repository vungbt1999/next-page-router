import { ButtonBase } from '@/components/form-base';
import Logo from '@/components/logo';
import { EUserRole } from '@/types';
import localStorageUtils, { EKeyStorage } from '@/utils/local-storage.utils';
import Image from 'next/image';
import Link from 'next/link';

export type HeaderProps = {
  navigation: { title: string; url: string }[];
  heroBackground?: string;
  role?: EUserRole;
};

export default function HeaderLayout({ navigation, heroBackground, role }: Readonly<HeaderProps>) {
  const switchLayoutWithRole = async (currentRole?: EUserRole) => {
    let newRole = EUserRole.Employee;
    switch (currentRole) {
      case EUserRole.Employee:
        newRole = EUserRole.Employer;
        break;
      case EUserRole.Employer:
        newRole = EUserRole.Employee;
    }
    localStorageUtils.set(EKeyStorage.ROLE, newRole);
  };

  return (
    <header className="px-12 py-5 relative bg-surface-invert min-h-[572px]">
      <div className="relative flex items-center justify-between z-[1]">
        <div className="w-fit">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-1">
          <nav className="flex items-center gap-6 justify-end">
            {navigation.map((navItem) => {
              return (
                <Link
                  className="block px-4 py-4 cursor-pointer text-invert font-semibold"
                  href={navItem.url}
                  key={navItem.title}
                >
                  {navItem.title}
                </Link>
              );
            })}
            <ButtonBase
              label={role === EUserRole.Employee ? 'For Employers' : 'For Job seekers'}
              prefixIcon="arrow-right"
              onClick={() => switchLayoutWithRole(role)}
            />
          </nav>
        </div>
      </div>

      {/** Hero background */}
      {heroBackground && <Image priority src={heroBackground} fill alt="employer-banner" />}
    </header>
  );
}
