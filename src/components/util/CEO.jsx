import React from 'react';// Importa React para poder utilizar JSX y crear componentes.
import { NextSeo } from 'next-seo';// Importa el componente NextSeo de la biblioteca next-seo para gestionar el SEO de la página.

const SEO = ({ title, description, image }) => {// Define un componente funcional SEO que recibe props: title, description e image.
    return (
        <NextSeo
            title={title}// Establece el título de la página utilizando el prop title.
            description={description}// Establece la descripción de la página utilizando el prop description.
            openGraph={{
                title: title,// Configura los metadatos de Open Graph, utilizando el título proporcionado.
                description: description,// Configura la descripción de Open Graph.
                images: [// Configura las imágenes para Open Graph. 
                    {
                      url: image,// Establece la URL de la imagen utilizando el prop image.
                    },
                    
                  ],
                site_name: "Bazar-JJ",// Establece el nombre del sitio para Open Graph.
            }}
            twitter={{
                handle: "",// Establece el handle de Twitter (puede ser dejado vacío si no se utiliza).
                site: "",// Establece el sitio de Twitter (puede ser dejado vacío si no se utiliza).
                cardType: "summary_large_image",// Define el tipo de tarjeta de Twitter como 'summary_large_image'.
            }}
        />
    )
}

export default SEO// Exporta el componente SEO para que pueda ser utilizado en otras partes de la aplicación.