import "../styles/globals.css";

import {
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Chart,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  SubTitle,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip,
} from "chart.js";

import type { AppProps } from "next/app";
import Head from "next/head";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.0/font/bootstrap-icons.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// export default function App({ Component, pageProps }: AppProps) {

//   let persistor = persistStore(store);
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Component {...pageProps} />
//       </PersistGate>
//     </Provider>
//   )
// }
