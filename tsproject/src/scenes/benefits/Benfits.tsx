import { SelectedPage } from "@/constants/types";
import Htext from "@/shared/Htext";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
type props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Benefits({ setSelectedPage }: props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6  py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benfits)}>
        {/* Headers */}

        <div className="md:my-5 md:w-3/5">
          <Htext> MORE THAN JUST A GYM . </Htext>
          <p className="my-5 text-sm">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            voluptate sequi temporibus voluptatibus autem, qui rerum harum dolor
            voluptates, tenetur eius et voluptatem. Quidem quae pariatur commodi
            nihil facilis eaque.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
