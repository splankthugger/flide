import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { darkTheme } from '../../../styles/theme';
import AuthorizationPage from '../../Pages/Authorization/AuthorizationPage';
import RegistrationPage from '../../Pages/Registration/RegistrationPage';
import RestorePage from '../../Pages/Restore/RestorePage';

type Layout = {
    children: any
}

const EmptyLayout: React.FC<Layout> = ({children}) => {
    const router = useRouter()
    const isAuthorizationPage = router.asPath === '/authorization'
    const isRegistrationPage = router.asPath === '/registration'
    const isRestorePage = router.asPath === '/restore'

    return (
        <Wrapper>
            {isAuthorizationPage &&
                <AuthorizationPage/>
            }

            {isRegistrationPage &&
                <RegistrationPage/>
            }

            {isRestorePage &&
                <RestorePage/>
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${darkTheme.backgroundColor.black};
`

export default EmptyLayout;