import { FC, ReactElement } from 'react';
import Link from 'next/link';

const Menu: FC = (): ReactElement => {
  const menuEntries = [
    {
      label: 'Resume',
      description: 'Directly download my CV in PDF format.',
      icon: 'icon',
      href: '/iav-resume.pdf',
      hoverColor: 'group-hover:text-red-600',
    },
    {
      label: 'Work',
      description: 'Check my personal portfolio.',
      icon: 'icon',
      href: '/work',
      hoverColor: 'group-hover:text-sky-600',
    },
    {
      label: 'Academic profile',
      description: 'See my academic profile page.',
      icon: 'icon',
      href: '/academic-profile',
      hoverColor: 'group-hover:text-indigo-600',
    },
  ];

  return (
    <div className="container mx-auto lg:max-w-3xl">
      {menuEntries.map(({ label, description, icon, href, hoverColor = '' }, index) => (
        <Link key={index} href={href}>
          <a>
            <div className="flex flex-row p-6 group first:border-t border-b border-slate-100 hover:bg-slate-50 items-center">
              <div className="px-6">
                {icon}
              </div>

              <div className="grow">
                <p className={`lg:text-xl text-slate-800 ${hoverColor}`}>{label}</p>
                <p className="text-slate-600">{description}</p>
              </div>

              <div className="px-6">
                C
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
