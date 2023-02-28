import React from 'react'
import "../App.css"

const Table = ({ list }) => {
    return (
        <table className='table'>
            <thead className='table-head'>
                <tr>
                    <th className='header-keys' align='left'>Nombre</th>
                    <th className='header-keys' align='left'>Usuario</th>
                    <th className='header-keys' align='left'>Email</th>
                    <th className='header-keys' align='left'>Dirección</th>
                </tr>
            </thead>
            <tbody>
                {list?.length > 0 ? (
                    list?.map((user) => (
                        <tr className='table-row' key={user?.id}>
                            <td>{user?.name}</td>
                            <td>{user?.username}</td>
                            <td>{user?.email}</td>
                            <td>
                                {user?.address.street}, {user?.address.city}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr className='table-row'>
                        <td>No se registraron usuarios aún</td>
                    </tr>

                )}

            </tbody>
        </table>
    )
}

export default Table;