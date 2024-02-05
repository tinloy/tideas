import Head from "next/head";
import { theme } from "../assets/overrideTheme";
import { ThemeProvider } from "@mui/material";

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>Tinloy Studio</title>
                <meta name='description' content='Tinloy Studio -  Visualise your imagination' />
                <link rel='icon' href='/tw.ico' />
            </Head>
            <main>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </main>
        </>
    );
}
