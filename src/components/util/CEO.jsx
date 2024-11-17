import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = ({ title, description, image }) => {
    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title: title,
                description: description,
                images: [
                    {
                      url: image,
                    },
                  ],
                site_name: "Bazar-JJ",
            }}
            twitter={{
                handle: "",
                site: "",
                cardType: "summary_large_image",
            }}
        />
    )
}

export default SEO