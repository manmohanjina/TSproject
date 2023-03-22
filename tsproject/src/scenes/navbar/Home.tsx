import { SelectedPage } from "@/constants/types";
import ActionButton from "@/shared/ActionBtn";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMedia";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: props) {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full pb-0">
      {/* ImageAndHeaders */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6  "
      >
        {/* MainHeaders */}

        <div className="z-10 mt-32  md:basis-3/5">
          {/* Heading */}

          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute   before:-top-20  before:-left-20 before:z-[-1] md:before:content-evolvetext ">
                <img src={HomePageText} alt="HomePageText" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quia
              eveniet iste excepturi tenetur explicabo dolore, officiis, libero
              quod repudiandae minus animi dolorem blanditiis maxime praesentium
              est voluptates! Id, et.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 "
          >
            {" "}
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <div
          className="flex basis-3/5 justify-center md:z-10
        md:ml-40 md:mt-16 justify-items-end
        "
        >
          <img src={HomePageGraphic} alt="home-page-Graphic" />
        </div>
      </motion.div>
      {/* Sponsors */}

      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 ">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="red-bull-sponsor" />
              <img src={SponsorForbes} alt="" />
              <img src={SponsorFortune} alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
