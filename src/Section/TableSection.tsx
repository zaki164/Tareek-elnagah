import { useTranslation } from "react-i18next";

const TableSection = () => {
  const { t } = useTranslation()

  const data = [
    { name: "محمد زنفل", value: 75 },
    { name: "أيمن", value: 75 },
    { name: "زكي", value: 75 },
    { name: "محمد شوقي", value: 60 },
    { name: "كمال", value: 49 },
    { name: "أحمد الجمال", value: 42 },
    { name: "محمود رمضان", value: 55 },
    { name: "عمر", value: 45 },
    { name: "عبد الله", value: 60 },
    { name: "محمد عبد الله", value: 32 },
    { name: "هشام", value: 36 },
    { name: "طلعت", value: 10 },
    { name: "البونز", value: 20 },
    { name: "محمود الجمال", value: 10 },
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