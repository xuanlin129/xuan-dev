import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function PageWithHelmet(props) {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Helmet>
        <title>{t(`${props.pageKey}.title`)} | 示範網站</title>
      </Helmet>
      {props.children}
    </React.Fragment>
  );
}
