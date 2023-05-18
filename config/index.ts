import { AiFillGithub, AiFillMail } from 'react-icons/ai'; // import react icons
import avatarJpg from '@/public/avatar.jpg';

export const config: IConfig = {
  name: 'john',
  avatar: avatarJpg,
  contact: [
    {
      icon: AiFillGithub,
      url: 'https://www.github.com/dewjohn'
    }
  ],
  navList: [
    {
      title: 'Archives',
      url: '/archives'
    },
    {
      title: 'About',
      url: '/about'
    }
  ]
};
