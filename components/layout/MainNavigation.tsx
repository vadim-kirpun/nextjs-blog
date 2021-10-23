import Link from 'next/link';
import { memo } from 'react';

import { Header, Logo } from './styles/MainNavigation';

const links = [
  { href: '/posts', label: 'Posts' },
  { href: '/contact', label: 'Contact' },
];

const MainNavigation = () => (
  <Header>
    <Link href='/'>
      <a>
        <Logo>NextJS Blog</Logo>
      </a>
    </Link>

    <nav>
      <ul>
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </Header>
);

export default memo(MainNavigation);
