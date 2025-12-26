import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h1>404</h1>
      <p>{t('notFound.title')}</p>
      <Link to="/">{t('notFound.backHome')}</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #666;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
