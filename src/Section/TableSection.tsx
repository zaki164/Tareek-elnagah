import { useTranslation } from "react-i18next";

const TableSection = () => {
  const { t } = useTranslation()

  const data = [
    { name: "محمد زنفل", value: 180 },
    { name: "زكي", value: 180 },
    { name: "أيمن", value: 160 },
    { name: "عبد الله", value: 137 },
    { name: "محمد شوقي", value: 132 },
    { name: "أحمد الجمال", value: 177 },
    { name: "كمال", value: 101 },
    { name: "محمود رمضان", value: 105 },
    { name: "عمر", value: 72 },
    { name: "محمد عبد الله", value: 72 },
    { name: "هشام", value: 46 },
    { name: "طلعت", value: 25 },
    { name: "البونز", value: 45 },
    { name: "محمود الجمال", value: 20 },
    { name: "عمرو", value: 2 },
    { name: "معتز", value: 0 },
    { name: "مصطفي", value: 0 },
    { name: "طه", value: 0 },
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
              data?.sort((a, b) => b.value - a.value).map((ele, i, arr) => (
                <tr key={ele?.name} className={`table-body ${i === arr.length - 1 || ele.value === 0 ? "bg-redColor" : i === 0 ? "bg-[#df7f0a]" : i === 1 ? "bg-[#226d6e]" : i === 2 ? "bg-[#293e3f]" : "bg-lightBg2"}`}>
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