import Head from 'next/head';
import React from 'react';

type props = {
    title: string;
}

const PageTitle = ({title}: props) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

export default PageTitle;