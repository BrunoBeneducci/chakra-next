import { Box, Flex, Heading, List, ListItem, Stack, Link, Text } from "@chakra-ui/react";
import { Header } from "../../components/organisms/Header";
import { Sidebar } from "../../components/organisms/Sidebar";

export default function ListaTeste({ posts }) {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    {
                        posts ? (
                            <Stack spacing="6">
                                <Box>
                                    <Heading as="h3" size="xl" color="pink.500">
                                        Página SSG
                                    </Heading>

                                    <Box padding="4" bg="gray.700" borderRadius="8" mt="4">
                                        <Text>
                                            Neste caso, é gerado uma pagina estatica com todo conteudo + as requisições feitas através do <Text color="pink.400" as="b">getStaticProps()</Text>
                                        </Text>
                                        <Text>
                                            No <Text color="pink.400" as="b">revalidate</Text> podemos definir de quanto em quanto tempo vamos considerar gerar uma nova versão da página.
                                        </Text>
                                        <Text>
                                            SSG é ideal para páginas que são iguais para todos os usuários e necessita de SEO (home de blog, post de blog, home de ecommerce...)
                                        </Text>
                                        <br />
                                        <Text py="2" px="3" borderRadius="4" borderWidth={1} borderColor="gray.500">
                                            Mais performático e menos dinâmico + SEO
                                        </Text>
                                    </Box>
                                </Box>

                                {/* <Heading as="h3" size="md" textTransform="uppercase">
                                    Total de posts: {posts.length}
                                </Heading> */}

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
    );
}

export async function getStaticProps() {
    const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await getPosts.json();

    const posts = res.map((post) => {
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
        revalidate: 60 * 60 * 24, // 24 horas p revalidar essa info
    }
}