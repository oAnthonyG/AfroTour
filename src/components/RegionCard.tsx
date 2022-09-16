import { useNavigate } from 'react-router-dom';
import styles from './RegionCard.module.scss';

interface RegionCardProps {
  title: string;
  img: string;
  description: string;
  minPrice: number;
}

export function RegionCard({ title, img, description, minPrice }: RegionCardProps) {
  const navigate = useNavigate()
  
  function handleNavigation() {
    navigate('/region')
  }
  return (
    <li className={styles.regionCard} onClick={handleNavigation}>
      <img src={img} />
      <div>
        <h3>{title}</h3>
        <p className={styles.descriptions}>{description}</p>
        <p className={styles.pricing}>A partir de <span>R$ {minPrice}</span></p>
      </div>
    </li>
  )
}