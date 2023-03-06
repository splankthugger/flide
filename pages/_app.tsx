import type { AppProps } from "next/app"
import Router, { useRouter } from "next/router"
import React from "react"
import { Provider } from "react-redux"
import styled from "styled-components"
import { store } from "../src/Stores/store"

import EmptyLayout from "../src/Components/Layouts/EmptyLayout"
import MainLayout from "../src/Components/Layouts/MainLayout"
import AuthorizationPage from "../src/Pages/Authorization/AuthorizationPage"
import "../styles/globals.css"
import { darkTheme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const isAuthorization = router.asPath === "/authorization"
    const isRegistration = router.asPath === "/registration"
    const isRestore = router.asPath === "/restore"

    return (
        <Wrapper>
            {!isAuthorization && !isRegistration && !isRestore && (
                <Provider store={store}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </Provider>
            )}
            <EmptyLayout>
                <Component {...pageProps} />
            </EmptyLayout>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    background-color: ${darkTheme.backgroundColor.blackBackground};
    isolation: isolate;
    z-index: 0;
    position: relative;
`

export default MyApp
