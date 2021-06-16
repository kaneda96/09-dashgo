import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Home() {
  type SignInFormData = {
    email: string;
    password: string;
  };

  const SignInSchema = yup.object().shape({
    email: yup.string().required("email obrigatório").email(),
    password: yup.string().required("senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(SignInSchema) });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Flex align="center" justify="center" w="100vw" h="100vh">
      <Flex
        as="form"
        width="100%"
        maxWidth={500}
        bg="gray.800"
        p="8"
        flexDir="column"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack>
          <Input
            name="email"
            type="email"
            label="E-mail:"
            error={errors.email}
            {...register}
          />
          <Input
            name="password"
            type="password"
            label="Password:"
            error={errors.password}
            {...register}
          />

          <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
            LOGAR
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
