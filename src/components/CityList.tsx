import styles from './CityList.module.scss';
import { CityCard } from "./CityCard";

interface City {
  img: string;
  cityName: string;
  habitants: number;
  area: number;
}

interface CityListProps {
  stateName: string;
  cities: City[]
}

export function CityList({ stateName, cities }: CityListProps) {
  return (
    <section className={styles.cityList}>
      <h3>{stateName}</h3>
      <ul>
        {cities.map(city => (
          <CityCard
          key={city.cityName}
            img={city.img}
            cityName={city.cityName}
            habitants={city.habitants}
            area={city.area}
          />
        )
        )}
      </ul>
    </section>
  )
}