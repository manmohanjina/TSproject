import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/constants/types";
import useMediaQuery from "@/hooks/useMedia";
import { useState } from "react";
import ActionButton from "@/shared/ActionBtn";
type props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({ selectedPage, setSelectedPage }: props) {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween}  w-full gap-16 `}>
            {/* leftSide */}
            <img src={Logo} alt="LOGO" />
            {/* RightSide */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween}  w-full `}>
                <div className={`${flexBetween} gap-8  text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Contact"
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Our Classes"
                  />
                  <Link
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Contact us "
                  />
                </div>
                <div className={`${flexBetween} gap-8  `}>
                  <p>Sign-In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className={"rounded-full bg-secondary-500 p-2"}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu modal */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div
          className={`fixed right-0 bottom-0 z-30 h-full w-[300px] bg-primary-100  drop-shadow-xl `}
        >
          {/* closeIcone */}
          <div className="flex justify-end p-12  ">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className=" h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu items */}
        </div>
      )}
    </nav>
  );
}