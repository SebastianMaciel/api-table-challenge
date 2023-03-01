import React from 'react';
import TableData from './TableData';
import './styles.css';

const Table = ({ users, loading, error }) => {
  // Evitamos renderizar la tabla si no hay usuarios
  if (loading) return <h1 className='loading'>Loading...</h1>;
  // O un error
  if (error) return <h1 className='error'>Server error...</h1>;

  return (
    <table className='table'>
      <thead className='table-head'>
        <tr>
          <th className='header-keys'>Name</th>
          <th className='header-keys'>Username</th>
          <th className='header-keys'>Email</th>
          <th className='header-keys'>Addresss</th>
        </tr>
      </thead>
      <tbody>
        <TableData users={users} />
      </tbody>
    </table>
  );
};

export default Table;
