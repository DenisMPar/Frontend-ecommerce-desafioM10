import { ReactElement } from "react";
import Logo from "./logo.svg";
import WhiteLogo from "./white-logo.svg";
import Burguer from "./burguer.svg";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

type Props = {
  className?: string;
};

export function LogoIcon({ className }: Props): ReactElement {
  return <Logo className={className}></Logo>;
}
export function WhiteLogoIcon({ className }: Props): ReactElement {
  return <WhiteLogo className={className}></WhiteLogo>;
}
export function BurguerIcon({ className }: Props): ReactElement {
  return <Burguer className={className}></Burguer>;
}
export function TwitterIcon({ className }: Props): ReactElement {
  return <FiTwitter className={className}></FiTwitter>;
}
export function InstagramIcon({ className }: Props): ReactElement {
  return <AiOutlineInstagram className={className}></AiOutlineInstagram>;
}
