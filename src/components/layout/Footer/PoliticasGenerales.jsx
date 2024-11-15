import { CheckIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Política de Atención al Cliente ',
        description:
            `
      <li>Compromiso a proporcionar un servicio al cliente excepcional, respondiendo a consultas y quejas en un plazo de 24 horas. </li>
      <li>Establecer un canal de comunicación accesible para los clientes, por medio de chat de nuestras redes sociales o de nuestro WhatsApp directamente.</li>
      
      `,
        icon: CheckIcon,
    },
    {
        name: 'Política de Calidad ',
        description:
            `
      <li>Garantizar que todos los productos cumplan con estándares de calidad predefinidos en Bazzar Fashon JJ.</li>
      <li>Se realizan procesos de revisión y control de calidad antes del envío de productos.</li>
      `,
        icon: CheckIcon,
    },
    {
        name: 'Política de Privacidad y Protección de Datos ',
        description:
            `
      <li>Compromiso a proteger la información personal y confidencial de nuestros clientes.</li>
      `,
        icon: CheckIcon,
    },
    // {
    // //     name: 'Politica de ',
    // //     description:
    // //         `
    // //   `,
    // //     icon: CheckIcon,
    // },
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
                    {/* col-1 define el numero de columnas en las cuales se desea mostrar */}
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                {/* aca esta el componente */}
                                    <div className="absolute left-0 top-0 flex size-7 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="size-5 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <ul className="mt-2 text-base/7 text-gray-600 list-disc" dangerouslySetInnerHTML={{ __html: feature.description }}></ul>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}