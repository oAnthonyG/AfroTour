import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CityList } from '../components/CityList';
import { Title } from '../components/Title';
import { client } from '../services/prismic';
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

interface RegionInfo {
  id: string;
  name: string;
  image: string;
  about: string;
  habitantsNumber: string;
  statesNumber: number;
  citiesNumber: number;
}

export function Region() {
  const [regionInfo, setRegionInfo] = useState<RegionInfo>()
  const { slug } = useParams() as { slug: string };


  useEffect(() => {
    async function fetchData() {
      const result = await client.getByUID('regions', slug)
 
      const resultsFormatted = {
        id: result.id,
        name: result.data.name,
        image: result.data.info[0].info_image.url,
        about: result.data.info[0].about,
        habitantsNumber: result.data.info[0].habitants_number,
        statesNumber: result.data.info[0].state_number,
        citiesNumber: result.data.info[0].cities_number,

      }
      setRegionInfo(resultsFormatted);
    }
    fetchData()
  })


  return (
    <main>
      <div className={styles.regionPresentation} style={{ backgroundImage: `url('${regionInfo?.image}')` }}>
        <div className={styles.title}>
          <h1>{regionInfo?.name}</h1>
        </div>
      </div>
      <section className={styles.content}>
        <article className={styles.regionInfo}>
          <ul>
            <li>
              <span>{regionInfo?.statesNumber || 0}</span>

              <p>estados</p>
            </li>
            <li>
              <span>{regionInfo?.habitantsNumber || 0}</span>
              <p>habitantes</p>
            </li>
            <li>
              <span>{regionInfo?.citiesNumber || 0}</span>
              <p>municípios</p>
            </li>
          </ul>

          <p>{regionInfo?.about}</p>
        </article>
        <Title>Escolha uma cidade</Title>

        <CityList stateName='Espirito Santo' cities={cities} />
        <CityList stateName='Minas Gerais' cities={cities} />
        <CityList stateName='Rio de Janeiro' cities={cities} />
        <CityList stateName='São Paulo' cities={cities} />

      </section>
    </main >
  )
}

