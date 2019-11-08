import React from 'react'
import App from 'next/app'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Component {...pageProps} />
                <style jsx global>{`
                    body {
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </>
        )
    }
}

export default MyApp