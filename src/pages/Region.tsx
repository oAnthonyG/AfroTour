import { Title } from '../components/Title';
import styles from './Region.module.scss';


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
      </section>
    </main >
  )
}

