import React from 'react'
import Layout from "@/components/layout";
import Head from '@/components/layout/components/Head';
import CEO from "@/components/util/CEO";

const PoliticasDePagos = () => {
  return (
    <Layout>
      <CEO
        title="Políticas de pago"
        description={""}
        image={`${process.env.NEXT_PUBLIC_API_URL}/cover.jpeg`}
      />
      <div>
        <div className="bg-white py-24 sm:py-7">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <Head
              tittle={"Formas de pago"}
              description={"En nuestro local, queremos hacer tu experiencia de compra lo más fácil y conveniente posible. Por eso, ofrecemos diversas opciones de pago:"}
            />
            <div className="grid grid-cols-1 gap-8 mt-10">
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">💳 Tarjetas de Débito y Crédito</h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>En nuestro local, aceptamos todas las tarjetas principales de débito y crédito (Visa, Mastercard, American Express, etc.). Puedes pagar de forma rápida y segura.</p>
                  <p></p>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">💵 Efectivo</h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>Si prefieres, también puedes realizar tu pago en efectivo en nuestro local. ¡Sin complicaciones!</p>
                  <p></p>
                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900"> 💻 Transferencias Bancarias</h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>Ofrecemos la opción de transferencias bancarias directas. Contáctanos para recibir los datos de la cuenta y realizar tu pago cómodamente desde tu banco.</p>
                  <p></p>
                </address>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default PoliticasDePagos
