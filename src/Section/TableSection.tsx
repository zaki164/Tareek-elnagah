import { useTranslation } from "react-i18next";

const TableSection = () => {
  const { t } = useTranslation()

  const data = [
    { name: "محمد زنفل", value: 50 },
    { name: "أيمن", value: 50 },
    { name: "زكي", value: 50 },
    { name: "محمد شوقي", value: 40 },
    { name: "كمال", value: 37 },
    { name: "أحمد الجمال", value: 17 },
    { name: "محمود رمضان", value: 35 },
    { name: "عمر", value: 30 },
    { name: "عبد الله", value: 40 },
    { name: "محمد عبد الله", value: 27 },
    { name: "هشام", value: 24 },
    { name: "طلعت", value: 10 },
    { name: "البونز", value: 15 },
    { name: "محمود الجمال", value: 5 },
    { name: "معتز", value: 0 },
    { name: "عمرو", value: 0 },
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