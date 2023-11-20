'use client';
import { apiSlice } from '@/redux/features/api/apiSlice';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

const ReduxCreateApiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ApiProvider api={apiSlice}>{children}</ApiProvider>;
};
export default ReduxCreateApiProvider;
