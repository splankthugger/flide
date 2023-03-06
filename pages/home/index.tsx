import type { NextPage } from 'next'
import HomePage from '../../src/Pages/Home/HomePage'
import PageTitle from '../../src/Components/Layouts/PageTitle'
import AlbumCardItem from '../../src/Components/General/MiniCardItem/AlbumCardItem'

const Home: NextPage = () => {
  return (
    <>
      <PageTitle title={'Flide — Главная'}/>
      <HomePage/>
    </>
  )
}

export default Home