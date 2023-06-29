import { Titillium_Web  } from "next/font/google"
import '../styles/globals.scss'

const titillium_Web = Titillium_Web({ subsets: ["latin"], weight: ["200", "300", "400", "600", "700", "900"] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Strange Dreams</title>
            </head>
            <body className={titillium_Web.className}>
                {children}
            </body>
        </html>
    )
}