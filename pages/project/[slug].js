import Image from "next/image";
import { useRouter } from "next/router";
import { Title, Text } from "../../components/Typography/Typography";
import { client } from "../../config";
import Head from "next/head";
import { urlFor } from "../../config";
import Link from "next/link";

export default function project({ work }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Projet - {work?.title}</title>
      </Head>

      <div className='container'>
        <div className='pt-[80px]  mt-5 lg:flex lg:gap-3 lg:justify-between lg:flex-col'>
          <Link href='/'>
            <a>
              {/* <AiOutlineArrowLeft /> */}
              <span>Retour</span>
            </a>
          </Link>
          <div className='my-5'>
            <Title>{work?.title}</Title>
          </div>
          <Text>{work?.description}</Text>
          <div className='flex gap-3 my-5'>
            <a
              className='px-[20px] py-[5px] border  transition-all border-white hover:bg-white hover:text-black'
              href={`${work.github}`}
              target='_blank'
              rel='noreferrer'>
              Voir le code
            </a>
            <a
              className='px-[20px] py-[5px] border transition-all border-white hover:bg-white hover:text-black'
              href={`${work.demo}`}
              target='_blank'
              rel='noreferrer'>
              Voir le projet
            </a>
          </div>
          <ul>
            {work?.technosFront && (
              <li>
                Frontend : <span className='font-bold'>{work?.technosFront}</span>{" "}
              </li>
            )}
            {work?.technosBack && (
              <li>
                Backend : <span className='font-bold'>{work?.technosBack}</span>{" "}
              </li>
            )}
          </ul>
        </div>

        <div className='mt-12'>
          <h3 className='text-[32px] font-light'>Previews</h3>
          <div className='py-5'>
            <Image
              className='rounded-lg transition-all hover:opacity-50s object-cover'
              width='1703'
              height='965'
              layout='responsive'
              placeholder='blurDataURL'
              src={urlFor(work?.image?.asset?._ref).url()}
              alt={`Projet ${work?.title}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const work = await client.fetch(
    `*[_type == "works" && _id == "${context.query.id}"][0]{title, image, description, github, demo, technosFront, technosBack}`
  );
  return {
    props: {
      work,
    },
  };
}
