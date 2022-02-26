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
                    description: "Jiun Kong's Personal Website"
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
