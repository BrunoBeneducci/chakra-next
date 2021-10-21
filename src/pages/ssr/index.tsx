import { Box, Flex, Heading, List, ListItem, Stack, Link, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type Post = {
    id: number;
    slug: string;
    title: string;
}

interface PostsProps {
    posts: Post[]
}

export default function HomeSSR({ posts }: PostsProps) {
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    {
                        posts ? (
                            <Stack spacing="8">
                                <Box>
                                    <Heading as="h3" size="xl" color="pink.500">
                                        Página SSR
                                    </Heading>

                                    <Box padding="4" bg="gray.700" borderRadius="8" mt="4">
                                        <Text>
                                            Com o SSR podemos fazer requisições do lado do servidor criado pelo Next, tornando o conteudo acessivel ao Google
                                        </Text>
                                        <Text>
                                            Essas requições devem ser feitas no <Text color="pink.400" as="b">getServerSideProps()</Text> e mesmo desabilitando o JS do navegador, elas serão realizadas.
                                        </Text>
                                        <br />
                                        <Text>
                                            Mesmo utilizando SSR ou SSG, podemos realizar requisições tradicionais do SPA (client-side), principalmente para dados que não tenham a necessidade de estar disponivel para SEO (dados especificos de usuário logado, em alguns casos comentários de um post/produto)
                                        </Text>
                                        <br />
                                        <Text py="2" px="3" borderRadius="4" borderWidth={1} borderColor="gray.500">
                                            Menos performático e mais dinâmico + SEO
                                        </Text>
                                    </Box>
                                </Box>

                                <List spacing="2" pl="4" listStyleType="disc">
                                    {posts.map(item => (
                                        (
                                            <ListItem fontSize="16" fontWeight="normal">
                                                <Link href={`ssr/${item.id}/${item.slug}`}>
                                                    {item.title}
                                                </Link>
                                            </ListItem>
                                        )
                                    ))}
                                </List>
                            </Stack>
                        ) : (
                            <Heading as="h2" size="lg" textAlign="center">
                                Sem resultados
                            </Heading>
                        )
                    }
                </Box>
            </Flex>
        </Box>
    )
}

export async function getServerSideProps() {
    const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await getPosts.json();

    const posts = res.map((post:Post) => {
        return {
            id: post.id,
            slug: post.title.toLowerCase().replace(/ /g, '-'),
            title: post.title,
        }
    })

    return {
        props: {
            posts,
        },
    }
}