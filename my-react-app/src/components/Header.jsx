import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between max-w-full pt-6 items-center">
            <div className="logo ml-20">
                <img className="w-64" src="/img/Trcomercial-png.png" alt="Trcomercial" />
            </div>
            <ul className="flex gap-12 list-none">
                <li><a className="text-white transition duration-300 hover:text-blue-400 hover:border-b hover:capitalize" href="#sobre">Sobre</a></li>
                <li><a className="text-white transition duration-300 hover:text-blue-400 hover:border-b hover:capitalize" href="#produtos">Produtos</a></li>
                <li><a className="text-white transition duration-300 hover:text-blue-400 hover:border-b hover:capitalize" href="#contato">Contato</a></li>
                <li><a className="text-white transition duration-300 hover:text-blue-400 hover:border-b hover:capitalize" href="#social-media">Social Media</a></li>
            </ul>
            <div className="mr-20">
                <span className="text-white text-2xl cursor-pointer">
                    <ion-icon name="search-outline"></ion-icon>
                </span>
            </div>
        </header>
    );
};

export default Header;
