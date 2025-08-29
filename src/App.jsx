import { useEffect, useState } from "react";
import "./App.css";
import Index from "./routes/Index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      {loader ? (
        <div className="flex absolute w-full h-screen justify-center items-center bg-white">
          <div className="loader"></div>
        </div>
      ) : (
        <main>
          <ToastContainer />
          <Index />
        </main>
      )}
    </>
  );
};

export default App;
