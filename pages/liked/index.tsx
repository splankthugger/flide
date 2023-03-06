import type { NextPage } from 'next'
import LikedPage from '../../src/Pages/Liked/LikedPage'
import PageTitle from '../../src/Components/Layouts/PageTitle'
import styles from '../styles/Home.module.css'

const Liked: NextPage = () => {
  return (
    <>
      <PageTitle title={'Flide — Лайкнутые'}/>
      <LikedPage/>
    </>
    
  )
}

export default Liked