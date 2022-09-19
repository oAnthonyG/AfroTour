import { useState, useEffect } from 'react';
import * as Prismic from '@prismicio/client';

import { RegionCard } from "../components/RegionCard";

import HappyPersonPng from '../assets/happy-person.png';
import WhatsAppSvg from '../assets/icon-wpp.svg';

import styles from './Home.module.scss';
import { Title } from '../components/Title';

interface Region{
  id: string;
  slug: string;
  name: string;
  description: string;
  minPrice: number;
  image: string;
}

const endpoit = Prismic.getRepositoryEndpoint('anthony-afro-tour')
const client = Prismic.createClient(endpoit)

export function Home() {
  const [regions, setRegions] = useState<Region[]>([])

    useEffect(()=>{
      async function fetchDate(){
        const results = await client.getAllByType('regions')

        const resultsFormatted = results.map(item =>{
          return{
            id: item.id,
            slug: item.uid + '',
            name: item.data.name,
            description: item.data.description,
            minPrice: item.data.min_price,
            image: item.data.image.url,
          }
        })
        setRegions(resultsFormatted)
      }
      fetchDate()
    },[])

  return (
    <main className={styles.container}>
      <section className={styles.welcome}>
        <div className={styles.welcomeContent}>
          <div>
            <span>Boas vindas a AfroTour</span>
            <h1>Sua viagem dos sonhos é aqui.</h1>
            <p>Estamos empenhados em fornecer os melhores planos de viagem do brasil para você.</p>
            <button><img src={WhatsAppSvg} /> Agende sua viagem</button>
          </div>
          <img src={HappyPersonPng} alt="Pessoa muito feliz" />
        </div>
      </section>
      <section className={styles.regions}>
        <Title>Para onde vamos?</Title>
        <ul>
          {regions.map(region =>(
          <RegionCard
          slug={region.slug}
            title={region.name}
            description={region.description}
            minPrice={region.minPrice}
            img={region.image}
          />
          ))}
        </ul>
      </section>
    </main>
  )
}
