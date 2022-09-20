import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as Prismic from '@prismicio/client';

import { CityList } from '../components/CityList';
import { Title } from '../components/Title';
import { client } from '../services/prismic';
import styles from './Region.module.scss';


interface RegionInfo {
  id: string;
  name: string;
  image: string;
  about: string;
  habitantsNumber: string;
  statesNumber: number;
  citiesNumber: number;
}

interface CityResponse {
  city_name: string;
  habitants_number: number;
  area: number;
  city_image: {
    url: string;
  }
}
interface City {
  cityname: string;
  habitantsNumber: number;
  area: number;
  image: string;
}

interface State {
  name: string;
  cities: City[];
}

export function Region() {
  const [regionInfo, setRegionInfo] = useState<RegionInfo>();
  const [states, setStates] = useState<State[]>([]);
  const { slug } = useParams() as { slug: string };


  useEffect(() => {
    async function fetchData() {
      const resultRegion = await client.getByUID('regions', slug);
      const resultsStates = await client.getAllByType('states', {
        predicates: [Prismic.predicate.at('my.states.region', slug)]
      });
      const RegionFormatted = {
        id: resultRegion.id,
        name: resultRegion.data.name,
        image: resultRegion.data.info[0].info_image.url,
        about: resultRegion.data.info[0].about,
        habitantsNumber: resultRegion.data.info[0].habitants_number,
        statesNumber: resultRegion.data.info[0].state_number,
        citiesNumber: resultRegion.data.info[0].cities_number,
      }
      const statesFormatted = resultsStates.map(state => {
        return {
          name: state.data.name,
          cities: state.data.cities.map((city: CityResponse) => {
            return {
              cityname: city.city_name,
              image: city.city_image.url,
              habitantsNumber: city.habitants_number,
              area: city.area,
            }
          })

        }
      })

      setRegionInfo(RegionFormatted);
      setStates(statesFormatted);
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


        {states.map(state => <CityList stateName={state.name} cities={state.cities} />)}

      </section>
    </main >

  )
}

