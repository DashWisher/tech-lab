'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Nav() {
  function handleClick() {
    console.log('Button pushed');
  }

  useEffect(() => {
    const button = document.querySelector('.sign-up');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <header className="d-flex flex-between">
      <div className="logo">
        <a href="#">
          <Image
            src="/logo(light).png"
            alt="logo"
            width={35}
            height={35}
            className="image"
          />
          TechLab
        </a>
      </div>
      <div className="nav">
        <nav>
          <Link href="#">Activity</Link>
          <Link href="#">Labs</Link>
          <Link href="#">Courses</Link>
          <Link href="#">Sign in</Link>
        </nav>
        <button className="hollow-button sign-up">Sign up</button>
      </div>
    </header>
  );
}
