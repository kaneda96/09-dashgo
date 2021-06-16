import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  if (showProfileData) {
    return (
      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Bruno Ferrari</Text>
          <Text color="gray.300" fontSize="small">
            kanedaferrari@yahoo.com.br
          </Text>
        </Box>
        <Avatar
          size="md"
          name="Bruno Ferrari"
          src="https://xesque.rocketseat.dev/users/avatar/profile-4bc671a5-9868-4c9a-9fba-e3219ca62049-1615291670090.jpg"
        />
      </Flex>
    );
  }

  return (
    <Flex align="center">
      <Avatar
        size="md"
        name="Bruno Ferrari"
        src="https://xesque.rocketseat.dev/users/avatar/profile-4bc671a5-9868-4c9a-9fba-e3219ca62049-1615291670090.jpg"
      />
    </Flex>
  );
}
