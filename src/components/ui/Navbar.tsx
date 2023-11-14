'use client';

import { i18ns } from '##/config/i18n';
import ROUTES_ROOTS from '@/config/routes';
import { DEFAULT_DARK_VARIANT, DEFAULT_VARIANT } from '@/config/themes';
import { useChangeLocale, useCurrentLocale, useScopedI18n } from '@/i18n/client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import type { FunctionComponent } from 'react';
import { Button } from './Button';

interface NavbarProps {}

export const Navbar: FunctionComponent<NavbarProps> = () => {
  const { theme, setTheme } = useTheme();
  const themesCommandsT = useScopedI18n(i18ns.themes);
  const pagesTitlesT = useScopedI18n(i18ns.pagesTitles);
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <nav className="flex flex-col gap-1">
      <Link href={ROUTES_ROOTS.WEBSITE}>{`${pagesTitlesT('homepage')}`}</Link>
      <Link href={ROUTES_ROOTS.CATEGORY_ONE}>{`${pagesTitlesT('category-one')}`}</Link>
      <Link href={ROUTES_ROOTS.CATEGORY_TWO}>{`${pagesTitlesT('category-two')}`}</Link>
      <Button className="w-fit" onClick={currentLocale !== 'en' ? () => changeLocale('en') : undefined}>
        EN
      </Button>
      <Button className="w-fit" onClick={currentLocale !== 'fr' ? () => changeLocale('fr') : undefined}>
        FR
      </Button>
      <Button className="w-fit" onClick={theme !== DEFAULT_VARIANT ? () => setTheme(DEFAULT_VARIANT) : () => setTheme(DEFAULT_DARK_VARIANT)}>
        {theme !== DEFAULT_VARIANT ? `${themesCommandsT('enable-light-theme')}` : `${themesCommandsT('enable-dark-theme')}`}
      </Button>
    </nav>
  );
};

export default Navbar;
