import React from 'react'
import Layout from "@/components/layout";

const Contactenos = () => {
    return (
        <Layout>
            <div>
                aqui iria la informacion de contactenos
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

export default Contactenos
