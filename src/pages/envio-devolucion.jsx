import React from 'react'
import Layout from "@/components/layout";
import Head from '@/components/layout/components/Head';
import List from '@/components/layout/components/List';

const EnvioDevolucion = () => {
  return (
    <Layout>
      <div className="bg-white py-24 sm:py-7">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <Head
            tittle={"Políticas de Envío y Devolución"}
            description={"Nuestra prioridad es tu satisfacción. Por eso, hemos creado estas políticas claras y transparentes para que tu experiencia de compra sea lo más sencilla posible. ¡Estamos aquí para ayudarte en todo momento!"}
          />
          <div className="mx-auto max-w-4xl lg:mx-0 mt-10">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Políticas de Envío</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8">
            <List
              tittle={"Opciones de Envío"}
              icon={"📤"}
              items={
                <ul className="list-disc ml-4 max-w-4xl">
                  <li><span className='font-semibold text-gray-900 mr-2'>Envío Estándar:</span>Se realiza la entrega dentro de 3 a 5 días hábiles. Ideal para pedidos que no requieren urgencia. </li>
                  <li><span className='font-semibold text-gray-900 mr-2'>Envío Exprés:</span>Entrega en 1 a 2 días hábiles. Perfecto para clientes que necesitan recibir sus productos rápidamente.</li>
                  <li><span className='font-semibold text-gray-900 mr-2'>Envío Same-Day:</span>Ofrecer un servicio de entrega el mismo día para pedidos realizados antes de una hora específica.</li>
                  <li><span className='font-semibold text-gray-900 mr-2'>Retiro en Tienda:</span>Permitir a los clientes la opción de recoger sus pedidos directamente en la tienda sin costo adicional.</li>
                  <li><span className='font-semibold text-gray-900 mr-2'>Flexibilidad en la entrega:</span>En caso de que los clientes necesiten que se les realice la entrega del producto en un punto más accesible o en su lugar de trabajo, pueden optar por él envió flexible. </li>
                </ul>
              }
            />
            <List
              tittle={"Costos de Envío"}
              icon={"💵"}
              items={
                <ul className="list-disc ml-4 max-w-4xl">
                  <li><span className='font-semibold text-gray-900 mr-2'>Envío Estándar:</span>$2.00</li>
                  <li><span className='font-semibold text-gray-900 mr-2'>Envío Exprés:</span>$3.00</li>
                  <li><span className='font-semibold text-gray-900 mr-2'>Envío Same-Day:</span>$2.00</li>
                  <li><span className='font-semibold text-gray-900 mr-2'>Retiro en Tienda:</span>Sin costo adicional.</li>
                  <li><span className='font-semibold text-gray-900 mr-2'>Flexibilidad en la entrega:</span>$3.00</li>
                </ul>
              }
            />
          </div>
        </div>
      </div>


      <div>
        <div className="container mx-auto px-4">

          {/* este es para darle estilo a la informacion */}
          <div className="grid grid-cols-1 gap-8">

            <div>
              <h3 className="text-xl font-bold mb-1">Políticas de Devolución</h3>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-1">
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">📦<span className='pl-2'>Derecho de Devolución</span></h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <ul className="list-disc">

                    <ul className="ml-4 max-w-4xl">
                      <h3>Los clientes tienen derecho a devolver cualquier producto adquirido en nuestra tienda online dentro de un plazo de 3 o 5 días hábiles desde la recepción del pedido. </h3>
                      <li>
                        <ul className="list-disc ml-4 mt-5">
                          <p className='font-semibold text-gray-900'>Para que un producto sea elegible para devolución, debe cumplir con las siguientes condiciones:</p>
                          <li>El producto debe estar en su estado original, sin usar y con todas las etiquetas y empaques intactos.</li>
                          <li>Se debe incluir el recibo o comprobante de compra.</li>
                          <li>Los productos que no sean elegibles para devolución incluyen artículos personalizados, productos en oferta o aquellos que presenten signos de uso.</li>
                        </ul>

                      </li>

                    </ul>


                  </ul>

                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">🚚<span className='pl-2'>Tipos de Devoluciones</span></h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <ul className="list-disc">

                    <ul className="list-disc ml-4 max-w-4xl">
                      <li><span className='font-semibold text-gray-900 mr-2'>Devolución por reembolso:</span>Si el cliente desea un reembolso, se procesará el importe total utilizando el mismo método de pago utilizado en la compra. El reembolso se realizará dentro de los 7 días hábiles posteriores a la recepción del producto devuelto.</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Devolución por cambio:</span>Los clientes pueden optar por cambiar un producto por otro ya sea por talla o color; o por un producto de mayor valor y el cliente debe dar la diferencia por dicho cambio.</li>
                    </ul>

                  </ul>
                </address>
              </div>
              <List
                tittle={"Proceso de Devolución"}
                icon={"📥"}
                items={
                  <ul className="list-disc ml-4">
                    <li> Para iniciar una devolución, el cliente debeContactar nuestro servicio de atención al cliente a través de nuestro número de WhatsApp.</li>
                    <li>Proporcionar la información del pedido y el motivo de la devolución posterior recibir instrucciones sobre cómo devolver el producto.</li>
                  </ul>
                }
              />
              <List
                tittle={"Excepciones a la Política"}
                icon={"🏳️"}
                items={
                  <ul className="list-disc ml-4 mt-5">
                    <p className='font-semibold text-gray-900'>Ciertos productos están excluidos del derecho de devolución, tales como:</p>
                    <li>Artículos que han sido abiertos o usados que ya no posean sus viñetas y que no muestren su recibo de la compra.</li>
                    <li>Productos personalizados o hechos a medida.</li>
                  </ul>
                }
              />

              <List
                tittle={"Plazo para Procesar Devoluciones"}
                icon={"📅"}
                items={
                  <ul className="list-disc ml-4">
                    <p>Una vez recibido el producto devuelto, procesaremos la solicitud en un plazo máximo de 7 días hábiles.</p>
                  </ul>
                }
              />

              <List
                tittle={"Contáctanos en caso de Dudas."}
                icon={"📞"}
                items={
                  <ul className="list-disc ml-4">
                    <p>Si tiene alguna duda o necesita más información sobre nuestra política de devoluciones, no dude en ponerse en contacto con nuestro servicio de atención al cliente.  </p>
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </div >

    </Layout >
  );
};


export default EnvioDevolucion
