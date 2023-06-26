import { Layout } from "@/layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { NextPage } from "next";
import { ComponentType, ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { persistor, store } from "@/Redux/configStore/store";

type Page = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
  layout?: ComponentType;
};

interface Props extends AppProps {
  Component: Page;
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: Props) {
 
  const layoutComponent =
    Component.getLayout ||
    function (page) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Layout>
                <ToastContainer
                  position="top-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={true}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                {page}
              </Layout>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      );
    };
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {layoutComponent(<Component {...pageProps} />)}
      </QueryClientProvider>
    </Provider>
  );
}
