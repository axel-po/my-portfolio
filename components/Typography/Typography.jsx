export function Title({ children }) {
  return <h2 className='text-white tracking-wide text-clamp-xl'>{children}</h2>;
}

export function Text({ children }) {
  return <p className='text-gray text-lg leading-[33px] md:text-xl lg:leading-[40px]'>{children}</p>;
}
