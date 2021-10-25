// neste caso vamos gerar paginas dinamicas, pegando as informacoes no server antes de rendezirar no front
import { GetServerSideProps } from "next";
import Head from 'next/head';

import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { Header } from "../../../components/organisms/Header";
import { Sidebar } from "../../../components/organisms/Sidebar";

type Content = {
    title: string;
    body: string;
}

interface PostsPageProps {
    content: Content
}

export default function PostsPageSSR({ content }: PostsPageProps) {
    return (
        <>
            <Head>
                <title>PostsPageSSR | {content.title}</title>
            </Head>

            <Box>
            <Header />

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar/>

                    <Box flex="1">
                        <Heading as="h2" fontSize="xl" textTransform="capitalize">
                            {content.title}
                        </Heading>

                        <Text mt="2" fontWeight="light">
                            {content.body}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`);
    const content = await response.json();

    return {
        props: {
            content,
        }
    }
}
