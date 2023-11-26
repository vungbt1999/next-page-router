import { CSSProperties, FC } from 'react';
import Logo from './logo';
import ArrowUp from './arrow-up';
import Bell from './bell';
import ChevronUp from './chevron-up';
import ClipboardIcon from './clipboard-icon';
import Close from './close';
import EditIcon from './edit-icon';
import Envelope from './envelope';
import EyeSlash from './eye-slash';
import Eye from './eye';
import Facebook from './facebook';
import Github from './github';
import Gitlab from './gitlab';
import InstagramOutline from './instagram-outline';
import InstagramSolid from './instagram-solid';
import LanguageIcon from './language-icon';
import LinkIcon from './link-icon';
import Linkedin from './linkedin';
import Moon from './moon';
import Plus from './plus';
import RemoveIcon from './remove-icon';
import Search from './search';
import Sun from './sun';
import ArrowLeft from './arrow-left';
import ArrowRight from './arrow-right';
import Loading from './loading';
import LocaleIcon from './locale';
import NotFoundIcon from './not-found-icon';
export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName =
  | 'logo'
  | 'arrow-up'
  | 'bell'
  | 'chevron-up'
  | 'clipboard-icon'
  | 'close'
  | 'edit-icon'
  | 'envelope'
  | 'eye-slash'
  | 'eye'
  | 'facebook'
  | 'github'
  | 'gitlab'
  | 'instagram-outline'
  | 'instagram-solid'
  | 'language-icon'
  | 'link-icon'
  | 'linkedin'
  | 'moon'
  | 'plus'
  | 'remove-icon'
  | 'search'
  | 'sun'
  | 'arrow-left'
  | 'arrow-right'
  | 'loading'
  | 'locale'
  | 'not-found';

export type IconsType = Record<IconName, Icon>;

export const Icons: IconsType = {
  logo: (props: IconProps) => {
    return <Logo {...props} />;
  },
  'arrow-up': (props: IconProps) => {
    return <ArrowUp {...props} />;
  },
  bell: (props: IconProps) => {
    return <Bell {...props} />;
  },
  'chevron-up': (props: IconProps) => {
    return <ChevronUp {...props} />;
  },
  'clipboard-icon': (props: IconProps) => {
    return <ClipboardIcon {...props} />;
  },
  close: (props: IconProps) => {
    return <Close {...props} />;
  },
  'edit-icon': (props: IconProps) => {
    return <EditIcon {...props} />;
  },
  envelope: (props: IconProps) => {
    return <Envelope {...props} />;
  },
  'eye-slash': (props: IconProps) => {
    return <EyeSlash {...props} />;
  },
  eye: (props: IconProps) => {
    return <Eye {...props} />;
  },
  facebook: (props: IconProps) => {
    return <Facebook {...props} />;
  },
  github: (props: IconProps) => {
    return <Github {...props} />;
  },
  gitlab: (props: IconProps) => {
    return <Gitlab {...props} />;
  },
  'instagram-outline': (props: IconProps) => {
    return <InstagramOutline {...props} />;
  },
  'instagram-solid': (props: IconProps) => {
    return <InstagramSolid {...props} />;
  },
  'language-icon': (props: IconProps) => {
    return <LanguageIcon {...props} />;
  },
  'link-icon': (props: IconProps) => {
    return <LinkIcon {...props} />;
  },
  linkedin: (props: IconProps) => {
    return <Linkedin {...props} />;
  },
  moon: (props: IconProps) => {
    return <Moon {...props} />;
  },
  plus: (props: IconProps) => {
    return <Plus {...props} />;
  },
  'remove-icon': (props: IconProps) => {
    return <RemoveIcon {...props} />;
  },
  search: (props: IconProps) => {
    return <Search {...props} />;
  },
  sun: (props: IconProps) => {
    return <Sun {...props} />;
  },
  'arrow-left': (props: IconProps) => {
    return <ArrowLeft {...props} />;
  },
  'arrow-right': (props: IconProps) => {
    return <ArrowRight {...props} />;
  },
  loading: (props: IconProps) => {
    return <Loading {...props} />;
  },
  locale: (props: IconProps) => {
    return <LocaleIcon {...props} />;
  },
  'not-found': (props: IconProps) => {
    return <NotFoundIcon {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
