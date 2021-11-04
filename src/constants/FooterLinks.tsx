import {
  IconOpenSea,
  IconEtherscan,
  IconTwitter,
  IconDiscord,
  IconDiscourse,
  IconGitHub,
} from '@/components/icons';

const FooterLinks = [
  {
    id: 1,
    link: 'https://opensea.io/collection/devs-for-revolution',
    icon: <IconOpenSea />,
  },
  {
    id: 2,
    link: 'https://etherscan.io/address/0x25ed58c027921e14d86380ea2646e3a1b5c55a8b',
    icon: <IconEtherscan />,
  },
  {
    id: 3,
    link: 'https://twitter.com/developer_dao',
    icon: <IconTwitter />,
  },
  {
    id: 4,
    link: 'https://discord.gg/devdao',
    icon: <IconDiscord />,
  },
  {
    id: 5,
    link: 'https://github.com/Developer-DAO',
    icon: <IconDiscourse />,
  },
  {
    id: 6,
    link: 'https://forum.developerdao.com/',
    icon: <IconGitHub h={10} w={10} />,
  },
];

export default FooterLinks;
