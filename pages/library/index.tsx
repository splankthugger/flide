import type { NextPage } from 'next'
import LibraryPage from '../../src/Pages/Library/LibraryPage'
import PageTitle from '../../src/Components/Layouts/PageTitle'

const Library: NextPage = () => {
  return (
    <>
      <PageTitle title={'Flide — Медиатека'}/>
      <LibraryPage/>
    </>
    
  )
}

export default Library