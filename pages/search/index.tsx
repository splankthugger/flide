import type { NextPage } from 'next'
import SearchPage from '../../src/Pages/Search/SearchPage'
import PageTitle from '../../src/Components/Layouts/PageTitle'
import styles from '../styles/Home.module.css'

const Search: NextPage = () => {
  return (
    <>
      <PageTitle title={'Flide — Поиск'}/>
      <SearchPage/>
    </>
  )
}

export default Search