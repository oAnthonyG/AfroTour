import './styles/global.scss'
import styles from './App.module.scss';

import { Header } from './components/Header'
import HappyPersonPng from './assets/happy-person.png';

import WhatsAppSvg from './assets/icon-wpp.svg';

function App() {
  return (
    <>
      <Header />
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
            <li>
              <img src="https://images.unsplash.com/photo-1606859564877-d0312c1185e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
              <div>
                <h3>Centro-oeste</h3>
                <p className={styles.descriptions}>Passeios - Música ao vivo - Rural</p>
                <p className={styles.pricing}>A partir de <span>R$ 249</span></p>
              </div>
            </li>
            <li>
              <img src="https://images.unsplash.com/photo-1606859564877-d0312c1185e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
              <div>
                <h3>Centro-oeste</h3>
                <p className={styles.descriptions}>Passeios - Música ao vivo - Rural</p>
                <p className={styles.pricing}>A partir de <span>R$ 249</span></p>
              </div>
            </li>
            <li>
              <img src="https://images.unsplash.com/photo-1606859564877-d0312c1185e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
              <div>
                <h3>Centro-oeste</h3>
                <p className={styles.descriptions}>Passeios - Música ao vivo - Rural</p>
                <p className={styles.pricing}>A partir de <span>R$ 249</span></p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
