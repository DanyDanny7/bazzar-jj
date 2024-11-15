import { CheckIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Política de envío',
    description:
      'El tiempo de entrega en el área metropolitana de San Salvador y alrededores es de 3 a 5 días hábiles, el tiempo de entraga en la zona oriental y occidental del país es de 10 y 15 días hábiles.',
    icon: CheckIcon,
  },
  {
    name: 'Política de Cambio',
    description:
      'Para realizar cambio de estilo o talla, es necesario tener factura de compra, respectivo empaque y calzado sin ningún tipo de uso..',
    icon: CheckIcon,
  },
  {
    name: 'Política de Garantía',
    description:
      'El periodo para efectuar cambios de mercadería, o cambios por avería son quince días, a partir de fecha de entrega',
    icon: CheckIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Para toda solicitud de cambio es necesario enviar un mensaje por via WhatsApp con datos: nombre, factura, fecha de compra y estilo que desea cambiar',
    icon: CheckIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-23 sm:py-31">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Políticas Generales
          </p>
          <p className="mt-6 text-lg/7 text-gray-600">
          En Bazzar JJ, valoramos tu confianza. Por eso, te invitamos a leer detenidamente nuestras políticas generales. 
          No dudes en consultarnos, nuestro equipo está a tu disposición para ayudarte. Encontrarás información sobre:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}