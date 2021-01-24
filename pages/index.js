import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Containercomp from '../components/Containercomp'
import List from '../components/List'
import Navegacion from '../components/Navegacion'
import styles from '../styles/Home.module.css'

const Home =(props)=> {
  console.log(props)
  return (
    <Containercomp>
        <Head>
        <title>Inicio</title>
        </Head>
           <h1>Inicio</h1>
          <List nombres={props.nombres}></List>

    </Containercomp>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await res.json()
  return { nombres: json}
}

export default Home