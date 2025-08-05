import React from 'react';
import { ERROR_PAGE_DATA } from '../data/errorPage.data';
import ErrorPage from '../components/common/feedback/ErrorPage';

const NotFoundPage: React.FC = () => (
  <ErrorPage
    code={ERROR_PAGE_DATA.code}
    title={ERROR_PAGE_DATA.title}
    message={ERROR_PAGE_DATA.message}
    buttonLabel={ERROR_PAGE_DATA.homepageLabel}
    buttonTo="/"
  />
);

export default NotFoundPage;
