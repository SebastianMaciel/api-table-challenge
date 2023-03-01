export default function UserRow({ user }) {
  const { name, username, email, address } = user;
  const { street, city } = address;

  return (
    <tr className='table-row' key={user.id}>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        {street}, {city}
      </td>
    </tr>
  );
}
