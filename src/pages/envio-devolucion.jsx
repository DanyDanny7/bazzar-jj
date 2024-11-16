import React from 'react'
import Layout from "@/components/layout";
import Head from '@/components/layout/components/Head';

const EnvioDevolucion = () => {
  return (
    <Layout>
      <div>
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
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">📤<span className='pl-2'>Opciones de Envío</span></h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <ul className="list-disc">

                    <ul className="list-disc ml-4 max-w-4xl">
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Estándar:</span>Se realiza la entrega dentro de 3 a 5 días hábiles. Ideal para pedidos que no requieren urgencia. </li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Exprés:</span>Entrega en 1 a 2 días hábiles. Perfecto para clientes que necesitan recibir sus productos rápidamente.</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Same-Day:</span>Ofrecer un servicio de entrega el mismo día para pedidos realizados antes de una hora específica.</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Retiro en Tienda:</span>Permitir a los clientes la opción de recoger sus pedidos directamente en la tienda sin costo adicional.</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Flexibilidad en la entrega:</span>En caso de que los clientes necesiten que se les realice la entrega del producto en un punto más accesible o en su lugar de trabajo, pueden optar por él envió flexible. </li>

                    </ul>

                  </ul>

                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">💵<span className='pl-2'>Costos de Envío</span></h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <ul className="list-disc">

                    <ul className="list-disc ml-4 max-w-4xl">
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Estándar:</span>$2.00</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Exprés:</span>$3.00</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Same-Day:</span>$2.00</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Retiro en Tienda:</span>Sin costo adicional.</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Flexibilidad en la entrega:</span>$3.00</li>

                    </ul>

                  </ul>
                </address>
              </div>

            </div>
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

                    <ul className="list-decimal ml-4 max-w-4xl">
                      <h3>Los clientes tienen derecho a devolver cualquier producto adquirido en nuestra tienda online dentro de un plazo de 3 o 5 días hábiles desde la recepción del pedido. </h3>
                      <li>
                        <ul className="list-disc ml-4 mt-5">
                          <p className='font-semibold text-gray-900'>Para que un producto sea elegible para devolución, debe cumplir con las siguientes condiciones:</p>
                          <li>El producto debe estar en su estado original, sin usar y con todas las etiquetas y empaques intactos.</li>
                          <li>Se debe incluir el recibo o comprobante de compra.</li>
                          <li>Los productos que no sean elegibles para devolución incluyen artículos personalizados, productos en oferta o aquellos que presenten signos de uso.</li>
                        </ul>

                      </li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Same-Day:</span>Ofrecer un servicio de entrega el mismo día para pedidos realizados antes de una hora específica.</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Retiro en Tienda:</span>Permitir a los clientes la opción de recoger sus pedidos directamente en la tienda sin costo adicional.</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Flexibilidad en la entrega:</span>En caso de que los clientes necesiten que se les realice la entrega del producto en un punto más accesible o en su lugar de trabajo, pueden optar por él envió flexible. </li>

                    </ul>

                  </ul>

                </address>
              </div>
              <div>
                <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">💵<span className='pl-2'>Costos de Envío</span></h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <ul className="list-disc">

                    <ul className="list-disc ml-4 max-w-4xl">
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Estándar:</span>$2.00</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Exprés:</span>$3.00</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Envío Same-Day:</span>$2.00</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Retiro en Tienda:</span>Sin costo adicional.</li>
                      <li><span className='font-semibold text-gray-900 mr-2'>Flexibilidad en la entrega:</span>$3.00</li>

                    </ul>

                  </ul>
                </address>
              </div>

            </div>

            <ul className="list-disc">
              <li>
                <strong>Derecho de Devolución</strong>
                <ul className="list-disc ml-4">
                  <li></li>
                </ul>
              </li>
              <li>
                <strong>Condiciones para la Devolución</strong>
                <ul className="list-disc ml-4">
                  <p>Para que un producto sea elegible para devolución, debe cumplir con las siguientes condiciones:</p>
                  <li>El producto debe estar en su estado original, sin usar y con todas las etiquetas y empaques intactos.</li>
                  <li>Se debe incluir el recibo o comprobante de compra.</li>
                  <li>Los productos que no sean elegibles para devolución incluyen artículos personalizados, productos en oferta o aquellos que presenten signos de uso.</li>
                </ul>
              </li>
              <li>
                <strong>Tipos de Devoluciones</strong>
                <ul className="list-disc ml-4">
                  <li>Devolución por reembolso: Si el cliente desea un reembolso, se procesará el importe total utilizando el mismo método de pago utilizado en la compra. El reembolso se realizará dentro de los 7 días hábiles posteriores a la recepción del producto devuelto.</li>
                  <li>Devolución por cambio: Los clientes pueden optar por cambiar un producto por otro ya sea por talla o color; o por un producto de mayor valor y el cliente debe dar la diferencia por dicho cambio.</li>
                </ul>
              </li>
              <li>
                <strong>Proceso de Devolución</strong>
                <ul className="list-disc ml-4">
                  <p>Para iniciar una devolución, el cliente debe:</p>
                  <li>Contactar nuestro servicio de atención al cliente a través de nuestro número de WhatsApp.</li>
                  <li>Proporcionar la información del pedido y el motivo de la devolución.</li>
                  <li>Recibir instrucciones sobre cómo devolver el producto.</li>
                </ul>
              </li>
              <li>
                <strong>Excepciones a la Política</strong>
                <ul className="list-disc ml-4">
                  <li>Ciertos productos están excluidos del derecho de devolución, tales como:</li>
                  <li>Artículos que han sido abiertos o usados que ya no posean sus viñetas y que no muestren su recibo de la compra.</li>
                  <li>Productos personalizados o hechos a medida.</li>
                </ul>
              </li>
              <li>
                <strong>Plazo para Procesar Devoluciones</strong>
                <ul className="list-disc ml-4">
                  <p>Una vez recibido el producto devuelto, procesaremos la solicitud en un plazo máximo de 7 días hábiles.</p>
                </ul>
              </li>
              <li>
                <strong>Contacto para Dudas</strong>
                <ul className="list-disc ml-4">
                  <p>Si tiene alguna duda o necesita más información sobre nuestra política de devoluciones, no dude en ponerse en contacto con nuestro servicio de atención al cliente. </p>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </Layout >
  );
};


export default EnvioDevolucion
