export default function Posts(props) {
    const title = props.content.title;
    const contentPost = props.content.body;

    return (
        <div className="container estudo">
            <h2>{title}</h2>
            <p>{contentPost}</p>
        </div>
    )
}

// neste caso vamos gerar paginas estaticas, previamente definidas pelo getStaticPaths
export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: { id: '1', slug: 'sunt-aut-facere-repellat-provident-occaecati-excepturi-optio-reprehenderit' } },
            { params: { id: '7', slug: 'magnam-facilis-autem' } },
            { params: { id: '8', slug: 'dolorem-dolore-est-ipsam' } },
        ],
    }
}

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const content = await response.json();

    return {
        props: {
            content,
        },
        revalidate: 60 * 60 * 24, // 24 horas p revalidar essa info
    }
}
