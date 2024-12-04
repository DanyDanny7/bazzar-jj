import { CheckIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Head from './Head'

const features = [

]

export default function PoliticasGenerales() {
    return (


        <div className="bg-white py-20 sm:py-7">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Head
                    tittle={"Políticas Generales"}
                    description={"Bazar Fashion JJ valora la confianza de sus clientes y se compromete a mantener la transparencia en todas sus operaciones. Las políticas generales de la empresa son una muestra de este compromiso, proporcionando a los usuarios información clara y concisa sobre sus derechos y obligaciones."}
                />

                <div className="grid grid-cols-1 gap-8 mt-10">
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">📞<span className='pl-2'>Política de Atención al Cliente</span> </h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <ul className="list-disc">


                                <ul className="list-disc ml-4">
                                    <li>Compromiso a proporcionar un servicio al cliente excepcional, respondiendo a consultas y quejas en un plazo de 24 horas. </li>
                                    <li>Establecer un canal de comunicación accesible para los clientes, por medio de chat de nuestras redes sociales o de nuestro WhatsApp directamente. </li>
                                </ul>

                            </ul>

                            <p></p>
                        </address>
                    </div>
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">✔️ Política de Calidad </h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <ul className="list-disc">


                                <ul className="list-disc ml-4">
                                    <li>Garantizar que todos los productos cumplan con estándares de calidad predefinidos. </li>
                                    <li>Implementar un proceso de revisión y control de calidad antes del envío de productos.</li>
                                </ul>

                            </ul>

                        </address>
                    </div>
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900"> 💻 Política de Privacidad y Protección de Datos </h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">

                            <ul className="list-disc">


                                <ul className="list-disc ml-4">
                                    <li>Compromiso a proteger la información personal y confidencial de clientes y empleados. </li>
                                    <li>Implementar medidas adecuadas para garantizar la seguridad de los datos almacenados. </li>
                                </ul>

                            </ul>

                        </address>
                    </div>
                </div>


                <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    {/* col-1 define el numero de columnas en las cuales se desea mostrar */}
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    {/* aca esta el componente */}
                                    <div className="absolute left-0 top-1 flex size-7 items-center justify-center rounded-lg bg-indigo-600">
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
        </div >
    )
}