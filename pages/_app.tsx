import type { AppProps } from 'next/app'
import RootLayout from '../app/layout'
import { Provider } from '@/context'
import MyThemeProvider from '@/context/MyThemeProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <MyThemeProvider>
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            </MyThemeProvider>
        </Provider>
    )


}