import style from "./StatisticList.module.css";
import data from "@/data/search_results.json";
import StatisticItem from "../statistic-item/StatisticItem";

export default function StatisticList() {
  const items = data.items;

  return (
    <div className={style.statisticList}>
      {items.map((item) => (
        <StatisticItem key={item.identifier} {...item} />
      ))}
    </div>
  );
}
