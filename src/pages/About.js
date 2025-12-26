import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="container">
        <h1>{t('about.title')}</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
