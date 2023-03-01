import UserRow from './UserRow';

export default function TableData({ users }) {
  // Evitamos renderizar la tabla si no hay usuarios
  if (!users.length) return <tr className='table-row'>No registered users...</tr>;

  return users.map((user) => <UserRow key={user.id} user={user} />);
}
