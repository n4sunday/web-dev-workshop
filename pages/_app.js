import React from 'react'
import App from 'next/app'
import withReduxStore from '../lib/withReduxStore'
import { Provider } from 'react-redux'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>

                <style jsx global>{`
                    body {
                        font-family: 'Roboto', sans-serif;
                        margin: 0;
                    }
                    ::-webkit-scrollbar {
                         width: 0;
                    }
                    input:focus {
                        outline: none;
                    }
                `}</style>
            </>
        )
    }
}

export default withReduxStore(MyApp)