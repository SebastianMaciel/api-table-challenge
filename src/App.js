import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import useFetch from "./hooks/useFetch";

export default function App() {
  let [users, setUsers] = useState([]);
  let [cargando, setCargando] = useState(true);

  const [data] = useFetch("https://jsonplaceholder.typicode.com/users", setCargando);

  useEffect(() => {
    setUsers(data)
  }, [data]);

  return (
    <div className="general-container">
      {cargando ? (
        <div className="loading-container">
          <h1>CARGANDO...</h1>

        </div>
      ) : (
        <>
          <div style={{ margin: "2rem auto", width: "70%" }}>
            <h1>Users table</h1>
          </div>
          <Table list={users} />
        </>

      )}
    </div>
  );
}
