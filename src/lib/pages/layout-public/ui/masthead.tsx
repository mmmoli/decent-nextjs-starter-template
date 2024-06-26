import { publicRoutes } from '@shared/config/routes';
import { IconBrandGithub } from '@tabler/icons-react';
import { UserMenu } from '@widgets/auth/user-menu';
import Link from 'next/link';
import { FC } from 'react';

const navMenu = publicRoutes.map((route) => route({}));

export const Masthead: FC = () => {
  return (
    <div className='flex w-full flex-row items-center justify-between gap-2 bg-white px-2 py-2 shadow sm:px-5'>
      <div className='grow'>
        <Link href='/'>
          <h1 className='pb-0 font-medium'>Decent Next.js Starter Template</h1>
        </Link>
      </div>
      <nav>
        {navMenu.map((item) => (
          <Link key={item.label} href={item.url} className='text-gray-600 hover:text-gray-800'>
            {item.label}
          </Link>
        ))}
      </nav>
      <a
        href='https://github.com/jschuur/decent-nextjs-starter-template'
        rel='noreferrer noopener'
        target='_blank'
        tabIndex={-1}
        className='no-underline hover:no-underline'
      >
        <IconBrandGithub
          className='size-6 text-purple-600 hover:text-purple-700 sm:size-8'
          strokeWidth={1.5}
        />
      </a>
      <div className='h-10'>
        <UserMenu />
      </div>
    </div>
  );
};
