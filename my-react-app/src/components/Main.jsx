import React from 'react';

const Main = () => {
    return (
        <div className="bg-custom-bg bg-cover bg-no-repeat bg-right w-full h-screen text-white flex items-center">
            <div className="max-w-3xl px-8">
                <div className="text-5xl font-bold text-left">
                    <h1>MATERIAIS DE QUALIDADE</h1>
                    <h1><span>PARA VOCÊ.</span></h1>
                </div>
                <p className="text-white text-opacity-80 leading-8 mt-8">
                    Nossa distribuidora se destaca pela excelência e qualidade dos produtos oferecidos. <br />
                    Cada item é cuidadosamente selecionado para garantir durabilidade, eficiência e segurança. <br />
                    Trabalhamos com as melhores marcas do mercado, assegurando que nossos clientes recebam somente o melhor.
                </p>
                <button className="mt-8 bg-blue-400 text-white text-lg px-6 py-3 cursor-pointer transition-transform duration-200 transform hover:scale-105 rounded-full shadow-md">
                    Faça seu pedido
                </button>
            </div>
        </div>
    );
};

export default Main;
