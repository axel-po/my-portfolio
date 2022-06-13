export function Title({ children }) {
  return <h2 className='text-white text-clamp-xl'>{children}</h2>;
}

export function Text({ children }) {
  return <p className='text-gray text-lg'>{children}</p>;
}
