import type { NextPage } from 'next'
import PageTitle from '../../src/Components/Layouts/PageTitle'
import RegistrationPage from '../../src/Pages/Registration/RegistrationPage'

const Registration: NextPage = () => {
    return (
        <>
            <PageTitle title={'Flide — Регистрация'}/>
            <RegistrationPage/>
        </>
        
    )
}

export default Registration