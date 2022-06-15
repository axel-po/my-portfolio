import IconGitHub from "/public/assets/icon-github.svg";
import IconLinkedin from "/public/assets/icon-linkedin.svg";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className='fixed inset-0 flex justify-between items-center w-full h-[75px] px-[20px] z-10 effect-nav md:px-[90px]'>
      <Link href='/'>
        <a className='text-white font-bold text-md md:text-2xl'>AP</a>
      </Link>

      <div className='flex items-center'>
        <a href='https://github.com/axel-po' target='_blank' rel='noreferrer'>
          <Image src={IconGitHub} width='25' height='25' alt='icon github axel pointud' />
        </a>
        <a className='ml-[15px]' href='https://www.linkedin.com/in/axel-pointud-7a891b1ba' target='_blank' rel='noreferrer'>
          <Image src={IconLinkedin} width='25' height='25' alt='icon linkedin axel pointud' />
        </a>
      </div>
    </nav>
  );
}
