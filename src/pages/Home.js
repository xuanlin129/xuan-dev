import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="container">
        <h1>{t('home.title')}</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
