import Document, { Html, Head, Main, NextScript } from "next/document";

export default class document extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" href="/image/icon/favicon-16.png" sizes="16x16"/>
                    <link rel="icon" type="image/png" href="/image/icon/favicon-32.png" sizes="32x32"/>
                    <link rel="icon" type="image/png" href="/image/icon/favicon-152.png" sizes="152x152"/>
                    <link rel="icon" type="image/png" href="/image/icon/favicon-256.png" sizes="256x256"/>
                    <meta charSet="utf-8"></meta>
                    <meta name="theme-color" content="#6B1AE7"/>
                    <body>
                        <Main/>
                        <NextScript/>
                    </body>
                </Head>
            </Html>
        )
    }
}