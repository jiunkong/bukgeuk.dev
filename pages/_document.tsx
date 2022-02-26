import Document, { Html, Head, Main, NextScript } from "next/document";

export default class document extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8"></meta>
                    <body>
                        <Main/>
                        <NextScript/>
                    </body>
                </Head>
            </Html>
        )
    }
}