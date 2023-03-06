import type { NextPage } from 'next'
import AuthorizationPage from '../../src/Pages/Authorization/AuthorizationPage'
import PageTitle from '../../src/Components/Layouts/PageTitle'

const Authorization: NextPage = () => {
    return (
        <>
            <PageTitle title={'Flide — Авторизация'}/>
            <AuthorizationPage/>
        </>
        
    )
}

export default Authorization