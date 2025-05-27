import styles from "./StatisticItem.module.css";
import Image from "next/image";

type Statistic = {
  title: string;
  description: string;
  link: string;
  teaser_image_urls?: {
    src: string;
  }[];
};

export default function StatisticItem(stat: Statistic) {
  const { title, description, link, teaser_image_urls } = stat;
  const image = teaser_image_urls?.[0]?.src || null;

  return (
    <div className={styles.statisticItem}>
      {image && (
        <Image
          src={image}
          alt={title}
          className={styles.itemThumbnail}
          width={754}
          height={300}
        />
      )}

      <div className={styles.itemContent}>
        <h2 className={styles.itemTitle}>{title}</h2>
        <p className={styles.itemDescription}>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.itemLink}
        >
          View Source
        </a>
      </div>
    </div>
  );
}
