import styles from './page.module.scss'
import logoImg from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image 
          src={logoImg}
          alt="Logo da pizzaria"
        />

        <section className={styles.login}>
          <form action="#">
            <input 
              type="email"
              required
              name="Email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input 
              type="password"
              required
              name="Senha"
              placeholder="***********"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </form>

          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  )
}