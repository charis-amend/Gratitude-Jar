import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react"

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={pageProps.session}
        refetchInterval={7 * 60} // refetch session every 7 minutes
      >
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}

