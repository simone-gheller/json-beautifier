import Header from "./Header";
import Formatter from "./Formatter";
import Footer from "./Footer"
import { useState, useEffect } from "react";


function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 1080;
  
  useEffect(() => {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize);
   return () => window.removeEventListener("resize", handleWindowResize);
  },[]);

  return (
    <>
      <Header />
      <Formatter width={width} breakPoint={breakPoint} />
      <Footer width={width} />
    </>
  );
}

export default App;
