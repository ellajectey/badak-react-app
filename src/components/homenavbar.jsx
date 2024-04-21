import React from 'react';
import img from '../assets/badak-logo.png';
import { Link} from "react-router-dom";


function Homenavbar() {
    return (
        <div>
            <header class="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
    <nav class="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div class="relative flex items-center h-16">
            <a href="/">
                <img  src = {img}  className='w-40 h-25'/></a>
        </div>
        
        <div class="flex-grow"></div>
        <div class="hidden items-center justify-center gap-6 md:flex">
            <Link to="/login" class="font-dm text-sm font-medium text-slate-700">Login</Link>
            <Link to="/register"
                class="rounded-md bg-blue-500 px-3 py-1.5 font-dm text-sm font-medium text-white  transition-transform duration-200 ease-in-out hover:scale-[1.03]">
                    Sign up 
            </Link>
        </div>
        <div class="relative flex items-center justify-center md:hidden">
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-auto text-slate-900"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
            </button>
        </div>
    </nav>
</header>
        </div>
    );
}

export default Homenavbar;