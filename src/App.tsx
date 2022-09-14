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
        <div className={styles.welcome}>
          <div className={styles.welcomeContent}>
            <div>
              <span>Boas vindas a AfroTour</span>
              <h1>Sua viagem dos sonhos é aqui.</h1>
              <p>Estamos empenhados em fornecer os melhores planos de viagem do brasil para você.</p>
              <button><img src={WhatsAppSvg}/> Agende sua viagem</button>
            </div>
            <img src={HappyPersonPng} alt="Pessoa muito feliz" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
