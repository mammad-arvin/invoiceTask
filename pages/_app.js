import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import Providers from "@/Redux/Providers";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    if (router.pathname.includes("/finalInvoice")) {
        return (
            <Providers>
                <Component {...pageProps} />
            </Providers>
        );
    } else {
    }

    return (
        <Providers>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Providers>
    );
}
