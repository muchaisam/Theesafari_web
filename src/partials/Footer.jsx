import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/safari.webp';

function Footer() {
  return (

    <footer aria-label="Site Footer" class="bg-gray-100">
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
   

    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center text-teal-600 lg:justify-start">
        <Link to="/" className="block" aria-label="Theesafari">
              <img src={Logo} width= "32" height={32}/>
            </Link>
        </div>

        <p
          class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
        >
          Get out and Discover.
        </p>
      </div>

      <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
        <ul
          class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
        >
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              About
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Services
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Projects
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2023. All rights reserved.
    </p>
  </div>
</footer>


  );
}

export default Footer;
