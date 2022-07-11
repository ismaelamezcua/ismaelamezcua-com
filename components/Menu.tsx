import { FC, ReactElement } from 'react';
import Link from 'next/link';
import {
  DocumentTextIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';

const Menu: FC = (): ReactElement => {
  const menuEntries = [
    {
      label: 'Resume',
      description: 'Directly download my CV in PDF format.',
      icon: <DocumentTextIcon className="w-8 h-8" />,
      href: '/iav-resume.pdf',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Work',
      description: 'Check my personal portfolio.',
      icon: <BriefcaseIcon className="w-8 h-8" />,
      href: '/work',
      textColor: 'text-pink-600',
      bgColor: 'bg-pink-100',
     },
    {
      label: 'Academic profile',
      description: 'See my academic profile page.',
      icon: <AcademicCapIcon className="w- h-8" />,
      href: '/academic-profile',
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-100',
     },
  ];

  return (
    <div className="container mx-auto lg:max-w-3xl">
      {menuEntries.map(({ label, description, icon, href, textColor, bgColor }, index) => (
        <Link key={index} href={href}>
          <a>
            <div className="flex flex-row p-6 group first:border-t border-b border-slate-100 hover:bg-slate-50 items-center">
              <div className={`p-2 mx-4 rounded-lg ${textColor} ${bgColor}`}>
                {icon}
              </div>

              <div className="grow">
                <p className={`lg:text-xl text-slate-800`}>{label}</p>
                <p className="text-slate-600">{description}</p>
              </div>

              <div className="px-6">
                <ChevronRightIcon className="w-5 h-5" />
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
