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
    iconWidth: 35,
    name: 'Расписание'
  },
  {
    route: '/news',
    Icon: IconNews,
    iconWidth: 30,
    name: 'Новости'
  },
  {
    route: '/notifications',
    Icon: IconNotifications,
    iconWidth: 33,
    name: 'Объявления'
  },
  {
    route: '/dvv',
    Icon: IconDvv,
    iconWidth: 22,
    name: 'ДВВ'
  },
  {
    route: '/dualeducation',
    Icon: IconDualEducation,
    iconWidth: 53,
    name: 'Дуальное обучение'
  },
  {
    route: '/project',
    Icon: Project,
    iconWidth: 43,
    name: 'Проектное обучение'
  },
  {
    route: '/documentation',
    Icon: IconDocumentation,
    iconWidth: 27,
    name: 'Справки'
  }
]