import type { NextPage } from 'next'
import styled from 'styled-components'
import HomePage from '../src/Pages/Home/HomePage'
import PageTitle from '../src/Components/Layouts/PageTitle'

const Home: NextPage = () => {
  return (
    <Wrapper>
      <HomePage/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`

export default Home
