import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../config";

export default function Project({ work }) {
  return (
    <>
      {work ? (
        <article>
          <Link
            href={{
              pathname: `/project/${work?.title}`,
              query: { id: work?._id },
            }}>
            <a>
              <div className='rounded-lg hover:opacity-50s'>
                <Image
                  className='rounded-lg cursor-pointer transition-all hover:opacity-50 object-cover'
                  width='1703'
                  height='965'
                  src={urlFor(work?.image?.asset?._ref).url()}
                  layout='responsive'
                  alt='projet axel pointud'
                />
              </div>
            </a>
          </Link>

          <div className='pt-2'>
            <Link
              href={{
                pathname: `/project/${work?.title}`,
                query: { id: work?._id },
              }}>
              <a className='text-lg'>{work?.title}</a>
            </Link>
            {/* <div className='flex gap-3'>
              <Image src={Tailwind} width='25' height='25' alt='icon linkedin axel pointud' />
              <Image src={Tailwind} width='25' height='25' alt='icon linkedin axel pointud' />
              <Image src={Tailwind} width='25' height='25' alt='icon linkedin axel pointud' />
            </div> */}
          </div>
        </article>
      ) : (
        <p>...</p>
      )}
    </>
  );
}
