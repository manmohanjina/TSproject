import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar";
import { SelectedPage } from "@/constants/types";
import Home from "./scenes/navbar/Home"
import Benefits from "./scenes/benefits/Benfits";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else if (window.screenY !== 0) {
        setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handelScroll);
    };

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
