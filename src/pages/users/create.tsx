import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { Input } from "../../components/atoms/Input";
import { Header } from "../../components/organisms/Header";
import { Sidebar } from "../../components/organisms/Sidebar";
import Link from 'next/link';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Campo de nome obrigatório').min(2, 'Minimo 2 caracteres'),
    email: yup.string().required('Campo de email obrigatório').email('Verifique o email informado'),
    password: yup.string().required('Campo de senha obrigatório').min(6, 'Minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })
    const { errors } = formState;
    console.log(errors);

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async(data) => { 
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box
                  as="form"
                  flex="1"
                  borderRadius={8}
                  bg="gray.800"
                  p="8"
                  onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">
                        Criar usuários
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input
                              nameText="name"
                              type="text"
                              label="Nome Completo"
                              error={errors.name}
                              {...register('name')}/>

                            <Input
                              nameText="email"
                              type="email"
                              label="Email"
                              error={errors.email}
                              {...register('email')} />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input
                              nameText="password"
                              type="password"
                              label="Senha"
                              error={errors.password}
                              {...register('password')} />

                            <Input
                              nameText="password_confirmation"
                              type="password"
                              label="Confirmação de senha"
                              error={errors.password_confirmation}
                              {...register('password_confirmation')} />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}