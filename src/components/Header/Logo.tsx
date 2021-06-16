import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["3xl", "2xl", "4xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64" /* w="64" -> 256px */
    >
      Dashgo
      <Text
        as="span"
        /* as="span" -> todo o Text tem paragrago. Então, colocar o span para não ter esse problema  */ color="pink.500"
        ml="1"
      >
        .
      </Text>
    </Text>
  );
}
