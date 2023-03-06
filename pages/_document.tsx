import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument