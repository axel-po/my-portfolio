import React from "react";

export default function Footer() {
  return (
    <footer className='container flex justify-between items-center flex-col py-[55px] text-center sm:flex-row'>
      <p>&copy; Site web personnel</p>

      <p>
        Site réalisé avec <span className='font-bold'>Next JS, Tailwind, Sanity.io</span> ❤️
      </p>
    </footer>
  );
}
