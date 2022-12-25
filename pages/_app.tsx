import { GlobalStyle } from "../styles/global-style";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "../styles/theme";
import { PageContainer } from "../features/ui/page-container";
import { Banner } from "../features/ui/banner";
import { Header } from "../features/ui/header";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />

        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
