import styles from './Home.module.scss';
import { RegionCard } from "../components/RegionCard";

import HappyPersonPng from '../assets/happy-person.png';
import WhatsAppSvg from '../assets/icon-wpp.svg';

export function Home() {
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
        <h2>Para onde vamos?</h2>
        <ul>
          <RegionCard
            title="Centro-oeste"
            description="Passeios - Músicas ao vivo - Rural"
            minPrice={249}
            img="https://images.unsplash.com/photo-1606859564877-d0312c1185e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
          />
          <RegionCard
            title="Sudeste"
            description="Hístoria - Praia - Ciomidas típicas"
            minPrice={289}
            img="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80"
          />
          <RegionCard
            title="Sul"
            description="Passeios - Hístoria - Churrasco"
            minPrice={259}
            img="https://images.unsplash.com/photo-1616642325314-fe17e194b380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
          <RegionCard
            title="Nordeste"
            description="Praia - Aventura - Comidas típicas"
            minPrice={269}
            img="https://images.unsplash.com/photo-1579743975517-019a8c660271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
          <RegionCard
            title="Norte"
            description="Passeios - Aventura - Comidas típicas"
            minPrice={249}
            img="https://images.unsplash.com/photo-1518068396591-6488b1abd5ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </ul>
      </section>
    </main>
  )
}