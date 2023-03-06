import React from 'react';
import styled from 'styled-components';
import Count from './Count';

function getNoun(number: number, one: string, two: string, five: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }

const InformationProfile = ({user}: any) => {
    return (
        <Wrapper>
            <Count count={user.subscriptionArtistsId.length} />&nbsp;
            {getNoun(user.subscriptionArtistsId.length, 'подписка', 'подписки', 'подписок')}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
export default InformationProfile;