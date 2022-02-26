import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                title='Jiun Kong'
                description="Jiun Kong's Personal Website"
                openGraph={{
                    url: 'https://bukgeuk.dev',
                    title: 'Jiun Kong',
                    description: "Jiun Kong's Personal Website",
                    type: 'website',
                    site_name: 'bukgeuk.dev',
                    images: [{
                        url: 'https://bukgeuk.dev/image/profile.png',
                        width: 400,
                        height: 400
                    }]
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
