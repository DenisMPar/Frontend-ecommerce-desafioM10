import { useTransition, useSpring } from "react-spring";
import { on } from "stream";
import { CancelButton, PrimaryButton, SecondaryButton } from "ui/buttons";
import { TinyText } from "ui/text";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SidebarLink,
  SideBarMenuWrap,
  UserSessionWrapper,
} from "./styled";

type props = {
  show: boolean;
  toggle: () => any;
};

export const SideBar = (props: props) => {
  const onSession = true;
  const menuTranstition = useTransition(props.show, {
    from: { opacity: 0, top: `-100%` },
    enter: { opacity: 1, top: `0` },
    leave: { opacity: 0, top: `-100%` },
  });

  const menuLinksTransition = useTransition(props.show, {
    from: { opacity: 0, left: `-100%` },
    enter: { opacity: 1, left: `0` },
    leave: { opacity: 0, left: `-100%` },
    config: { duration: 650 },
  });
  const userSessionTransition = useTransition(props.show, {
    from: { opacity: 0, bottom: `-100%` },
    enter: { opacity: 1, bottom: `0` },
    leave: { opacity: 0, bottom: `-100%` },
    config: { duration: 650 },
  });
  return (
    <>
      {menuTranstition((style, item) =>
        item ? (
          <SideBarContainer style={style} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
              <CloseIcon />
            </Icon>
            <SideBarMenuWrap>
              {menuLinksTransition((style, item) =>
                item ? (
                  <>
                    <SideBarMenu style={style}>
                      <SidebarLink onClick={props.toggle}>Ingresar</SidebarLink>
                      <SidebarLink onClick={props.toggle}>
                        Mi perfil
                      </SidebarLink>
                      <SidebarLink onClick={props.toggle}>Buscar</SidebarLink>
                    </SideBarMenu>
                  </>
                ) : null
              )}
            </SideBarMenuWrap>
            {userSessionTransition((style, item) =>
              item ? (
                <>
                  {onSession ? (
                    <UserSessionWrapper style={style}>
                      <TinyText>mail@user</TinyText>
                      <CancelButton>Cerrar sesion</CancelButton>
                    </UserSessionWrapper>
                  ) : (
                    <UserSessionWrapper style={style}>
                      <PrimaryButton>Iniciar sesion</PrimaryButton>
                    </UserSessionWrapper>
                  )}
                </>
              ) : null
            )}
          </SideBarContainer>
        ) : null
      )}
    </>
  );
};
