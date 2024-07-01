import React from 'react';

const About = () => {
    return (
        <section id="sobre" className="section-1 text-white text-center mt-20">
            <h1 className="text-4xl font-bold">SOBRE <span className="text-blue-400">NÓS</span></h1>
            <div className="flex justify-center items-center mt-10">
                <div className="w-1/2">
                    <img src="/img/Prancheta 1.png" alt="Sobre" />
                </div>
                <div className="w-1/2 ml-10">
                    <h2 className="text-2xl font-semibold">O que faz nosso serviço especial?</h2>
                    <p className="text-white text-opacity-80 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quasi recusandae esse! Voluptatem consectetur laboriosam autem quibusdam aliquid, laudantium animi libero nam ut minima repellendus? Quod at recusandae culpa odio.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
