import React from 'react'
import Layout from "@/components/layout";


const AtencionAlCliente = () => {
    return (
        <Layout>
            <div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            AQUI DEBE IR LA IMAGEN 
                            
                        </div>
                        <div class="col-md-8">
                            <h2 class="display-4">Título del artículo</h2>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">Columna1</div>
                    </div>
                   
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.27032318757438!2d-89.1898854947584!3d13.69874524430974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63316a8adf675f%3A0xb0dc11a8100b3018!2sEdificio%20Santa%20Teresa!5e0!3m2!1ses!2ssv!4v1731341041010!5m2!1ses!2ssv"
                className='border-0 aspect-[1/1] md:aspect-[3/1] w-full mt-4'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </Layout>
    )
}

export default AtencionAlCliente
