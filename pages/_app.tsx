import { GlobalStyle } from "../styles/global-style";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { theme } from "../styles/theme";
import { PageContainer } from "../features/ui/page-container";
import { Raleway, Oswald, Montserrat } from "@next/font/google";

const raleway = Raleway();

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />

        <>
          <style jsx global>{`
            html {
              font-family: ${raleway.style.fontFamily};
            }
          `}</style>
          <PageContainer>
            <SessionProvider>
              <Component {...pageProps} />
            </SessionProvider>
          </PageContainer>
        </>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
