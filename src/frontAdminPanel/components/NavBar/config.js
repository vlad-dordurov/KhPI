import IconShedule from '../../assets/icons/timetable.svg';
import IconNews from '../../assets/icons/news.svg';
import IconNotifications from '../../assets/icons/notifications.svg';
import IconDvv from '../../assets/icons/dvv.svg';
import IconDualEducation from '../../assets/icons/dual_education.svg';
import Project from '../../assets/icons/project.svg';
import IconDocumentation from '../../assets/icons/documentation.svg';

export const navConfig = [
  {
    route: '/schedule',
    Icon: IconShedule,
    name: 'Расписание',
  },
  {
    route: '/news',
    Icon: IconNews,
    name: 'Новости',
  },
  {
    route: '/notifications',
    Icon: IconNotifications,
    name: 'Объявления',
  },
  {
    route: '/dvv',
    Icon: IconDvv,
    name: 'ДВВ',
  },
  {
    route: '/dualeducation',
    Icon: IconDualEducation,
    name: 'Дуальное обучение',
  },
  {
    route: '/project',
    Icon: Project,
    name: 'Проектное обучение',
  },
  {
    route: '/documentation',
    Icon: IconDocumentation,
    name: 'Справки',
  },
];
