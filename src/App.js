import React from 'react';
import Table from './components/Table';
import useFetch from './hooks/useFetch';
import { URL } from './constants';
import './App.css';

export default function App() {
  const { users, error, loading } = useFetch(URL);

  return (
    <>
      <h1>Users list</h1>
      <Table users={users} loading={loading} error={error} />
    </>
  );
}
