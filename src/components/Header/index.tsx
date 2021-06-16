import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenLine, RiMenu2Line, RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      maxWidth={1480}
      as="header"
      h="20" /* h="20" -> 80px */
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          as={RiMenuLine}
          variant="unstyled"
          fontSize="24"
          mr="2"
          onClick={onOpen}
        ></IconButton>
      )}
      <Logo />
      {isWideVersion ? (
        <>
          <SearchBox />
          <Flex align="center" ml="auto">
            <NotificationNav />
            <Profile showProfileData={isWideVersion} />
          </Flex>
        </>
      ) : (
        <>
          <SearchBox />
          <Flex align="center" ml="auto">
            <Profile showProfileData={isWideVersion} />
          </Flex>
        </>
      )}
    </Flex>
  );
}
