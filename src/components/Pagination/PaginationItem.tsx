import { Button, ButtonProps } from "@chakra-ui/react";

interface PaginationItemProps extends ButtonProps {
  page: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  page,
  isCurrent,
  ...rest
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      {...rest}
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {page}
    </Button>
  );
}
