import { CityCard } from '../components/CityCard';
import { CityList } from '../components/CityList';
import { Title } from '../components/Title';
import styles from './Region.module.scss';

const cities = [
  {
    img: "https://images.unsplash.com/photo-1627663412342-d77cd974e9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    cityName: 'Vitória',
    habitants: 362097,
    area: 276.8,
  },
  {
    img: "https://images.unsplash.com/photo-1627663412342-d77cd974e9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    cityName: 'Vitória',
    habitants: 362097,
    area: 276.8,
  },
  {
    img: "https://images.unsplash.com/photo-1627663412342-d77cd974e9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    cityName: 'Vitória',
    habitants: 362097,
    area: 276.8,
  },
  {
    img: "https://images.unsplash.com/photo-1627663412342-d77cd974e9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    cityName: 'Vitória',
    habitants: 362097,
    area: 276.8,
  },
  {
    img: "https://images.unsplash.com/photo-1627663412342-d77cd974e9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    cityName: 'Vitória',
    habitants: 362097,
    area: 276.8,
  },
  {
    img: "https://images.unsplash.com/photo-1627663412342-d77cd974e9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    cityName: 'Vitória',
    habitants: 362097,
    area: 276.8,
  },

]

export function Region() {
  return (
    <main>
      <div className={styles.regionPresentation} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1610160854179-5a1ff319683c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1495&q=80")' }}>
        <div className={styles.title}>
          <h1>Sudeste</h1>
        </div>
      </div>

      <section className={styles.content}>
        <article className={styles.regionInfo}>
          <ul>
            <li>
              <span>4</span>
              <p>estados</p>
            </li>
            <li>
              <span>87M</span>
              <p>habitantes</p>
            </li>
            <li>
              <span>1668</span>
              <p>municípios</p>
            </li>
          </ul>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quam magni eius deserunt aliquam
            repellat ad beatae. Cupiditate aspernatur cumque repellat nam esse ad omnis.
            Tempora voluptatibus recusandae fuga quis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur provident dignissimos soluta harum odio sapiente beatae sit assumenda
          </p>
        </article>
        <Title>Escolha uma cidade</Title>

          <CityList stateName='Espirito Santo' cities={cities}/>
          <CityList stateName='Minas Gerais' cities={cities}/>
          <CityList stateName='Rio de Janeiro' cities={cities}/>
          <CityList stateName='São Paulo' cities={cities}/>

      </section>
    </main >
  )
}

