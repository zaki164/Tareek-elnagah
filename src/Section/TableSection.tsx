import { useTranslation } from "react-i18next";

const TableSection = () => {
  const { t } = useTranslation()

  const data = [
    { name: "محمد زنفل", value: 6 },
    { name: "محمد شوقي", value: 7 },
    { name: "أيمن", value: 8 },
    { name: "كمال", value: 9 },
    { name: "أحمد الجمال", value: 10 },
    { name: "محمود رمضان", value: 12 },
    { name: "عمر", value: 13 },
    { name: "عبد الله", value: 5 },
    { name: "أحمد معتز", value: 20 },
    { name: "محمد عبد الله", value: 30 },
    { name: "البونز", value: 60 },
    { name: "مصطفي", value: 50 },
    { name: "طه", value: 32 },
    { name: "محمود الجمال", value: 22 },
    { name: "طلعت", value: 46 },
    { name: "هشام", value: 77 },
    { name: "عمرو", value: 25 },
    { name: "زكي", value: 4 },
  ]

  return (
    <section
      className="content-container p-container"
      data-aos={"fade-left"}
      data-aos-duration="1000"
    >
      <div
        className="table_responsive">
        <table className="table-fixed">
          <thead>
            <tr className="table-head">
              <td className="td_xs">{t("الترتيب")}</td>
              <td className="td_xs">{t("الإسم")}</td>
              <td className="td_xs">{t("النقاط")}</td>
            </tr>
          </thead>
          <tbody>
            {
              data?.sort((a, b) => b.value - a.value).map((ele, i) => (
                <tr key={ele?.name} className={`table-body ${i === 0 ? "bg-[#df7f0a]" : i === 1 ? "bg-[#226d6e]" : i === 2 ? "bg-[#293e3f]" : "bg-lightBg2"}`}>
                  <td>{i + 1}</td>
                  <td>{ele?.name}</td>
                  <td>{ele?.value}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TableSection