import styles from './RegionCard.module.scss';

interface RegionCardProps {
  title: string;
  img: string;
  description: string;
  minPrice: number;
}

export function RegionCard({ title, img, description, minPrice }) {
  return (
    <li className={styles.regionCard}>
      <img src={img} />
      <div>
        <h3>{title}</h3>
        <p className={styles.descriptions}>{description}</p>
        <p className={styles.pricing}>A partir de <span>R$ {minPrice}</span></p>
      </div>
    </li>
  )
}