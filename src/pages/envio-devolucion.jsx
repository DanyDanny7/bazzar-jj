import React from 'react'
import Layout from "@/components/layout";

const EnvioDevolucion = () => {
  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
          Políticas de Envío y Devolución
        </h2>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Políticas de Envío</h3>
            <ul className="list-disc">
              <li>
                <strong>Opciones de Envío</strong>
                <ul className="list-disc ml-4">
                  <li>Envío Estándar: Entrega dentro de 3 a 5 días hábiles. Ideal para pedidos que no requieren urgencia.</li>
                  <li>Envío Exprés: Entrega en 1 a 2 días hábiles. Perfecto para clientes que necesitan recibir sus productos rápidamente.</li>
                  <li>Envío Same-Day: Ofrecer un servicio de entrega el mismo día para pedidos realizados antes de una hora específica. Esto puede ser atractivo para clientes locales.</li>
                  <li>Retiro en Tienda: Permitir a los clientes la opción de recoger sus pedidos directamente en la tienda sin costo adicional.</li>
                </ul>
              </li>
              <li>
                <strong>Costos de Envío</strong>
                <ul className="list-disc ml-4">
                  <li>Envío Estándar: $2.00 (envio gratis en pedidos superiores a $50).</li>
                  <li>Envío Exprés: $3.00.</li>
                  <li>Envío Same-Day: $2.00</li>
                  <li>Retiro en Tienda: Sin costo adicional.</li>
                </ul>
              </li>
              <li>
                <strong>Flexibilidad en la Entrega</strong>
                <ul className="list-disc ml-4">
                  <li>Puntos de Recogida: Colaborar con tiendas locales o puntos de recogida donde los clientes puedan recoger sus pedidos si no están disponibles en casa.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Políticas de Devolución</h3>
            <ul className="list-disc">
              <li>
                <strong>Derecho de Devolución</strong>
                <ul className="list-disc ml-4">
                  <li>Los clientes tienen derecho a devolver cualquier producto adquirido en nuestra tienda online dentro de un plazo de 3 o 5 días hábiles desde la recepción del pedido, sin necesidad de justificar el motivo de la devolución.</li>
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
      </div>
    </Layout>
  );
};


export default EnvioDevolucion
