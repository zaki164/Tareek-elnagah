import { useTranslation } from "react-i18next";
import { MainTitle } from "../Components";
import TableSection from "../Section/TableSection";

const Home = () => {
  const { t } = useTranslation();

  return (
    // <div className="custom-container space-y-3">
    //   <section
    //     className="flex flex-col gap-2 md:gap-3 pt-4 md:pt-6"
    //     data-aos={"fade-down"}
    //     data-aos-duration="800"
    //   >
    //     <MainTitle
    //       title={t("ترتيب //الأبطال//")}
    //     />
    //     <p className="text-base-l text-grayText !leading-8">
    //       {t(" لا تنسي ركعتا الفجر خير من الدنيا وما فيها")}
    //     </p>
    //   </section>
    //   <TableSection />
    // </div>
    <></>
  )
};

export default Home;