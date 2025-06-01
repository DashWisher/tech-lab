import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function about() {
  return (
    <div>
      <h1>This is about page</h1>
      <Image
        aria-hidden
        src="/file.svg"
        alt="File icon"
        width={16}
        height={16}
      />
      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
}
