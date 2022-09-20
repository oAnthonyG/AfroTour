import styles from './CityList.module.scss';
import { CityCard } from "./CityCard";

interface City {
  image: string;
  cityname: string;
  habitantsNumber: number;
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
          key={city.cityname}
            img={city.image}
            cityName={city.cityname}
            habitants={city.habitantsNumber}
            area={city.area}
          />
        )
        )}
      </ul>
    </section>
  )
}