import Nav from "../../components/Nav/Nav";
import { useRouter } from "next/router";
import { Title, Text } from "../../components/Typography/Typography";
import { client } from "../../config";
import Head from "next/head";

export default function project({ work }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Projet - {work[0]?.title}</title>
      </Head>
      <div className='container'>
        <div className='py-[120px] max-w-[580px] mt-5 lg:flex lg:gap-3 lg:justify-between'>
          <Title>{work[0]?.title}</Title>
          <Text>{work[0]?.description}</Text>
        </div>

        <div>
          
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const work = await client.fetch(`*[_type == "works" && _id == "${context.query.id}"]{title, image, description, github, demo}`);
  return {
    props: {
      work,
    },
  };
}
