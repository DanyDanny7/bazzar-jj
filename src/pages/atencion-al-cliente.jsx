import React from 'react'
import Layout from "@/components/layout";


const AtencionAlCliente = () => {
  return (
    <Layout>
      <div>
        <div className="bg-white py-24 sm:py-7">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contáctenos</h2>
              <p className="mt-7 text-lg/8 text-gray-650">
                ¡Nos encantaría saber de ti! Si tienes preguntas, comentarios o necesitas más información sobre nuestros productos, no dudes en ponerte en contacto con nosotros a través de cualquiera de los siguientes métodos:
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">WhatsApp</h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>7111-1010</p>
                  <p>ya vamos a ver que ponemos</p>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Facebook</h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>Bazzar Fashon JJ</p>
                  <p>ya vamos a ver que ponemos</p>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Instagram</h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>bazzar_fashonJJ</p>
                  <p>ya vamos a ver que ponemos</p>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">TikTok</h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>bazzar_fashonJJ</p>
                  <p>ya vamos a ver que ponemos</p>
                </address>
              </div>
            </div>
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
