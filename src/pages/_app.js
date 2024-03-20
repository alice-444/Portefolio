import "@/styles/globals.css";
import { Ubuntu } from "next/font/google";

const inter = Ubuntu({ subsets: ["latin"], weight: "400" });

const App = ({ Component, pageProps }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Component {...pageProps} />;
    </main>
  );
};

export default App;
