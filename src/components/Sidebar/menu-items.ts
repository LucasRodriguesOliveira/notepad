import { IconType } from 'react-icons';
import { FaChartPie, FaDollarSign } from 'react-icons/fa';

export interface IMenuItem {
  icon: IconType;
  name: string;
  path: string;
}

export const menuItems: IMenuItem[] = [
  {
    icon: FaChartPie,
    name: 'Notes',
    path: '/notes'
  },
  {
    icon: FaDollarSign,
    name: 'Buy Premium',
    path: '/premium'
  },
];
