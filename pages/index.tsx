import type { NextPage } from "next";
import { useState } from "react";
import ListPeopleComponent from "@/components/modules/peoples/listPeoplesComponent";

const Home: NextPage = () => {
  const [filter, setFilter] = useState(false);
  const [searchData, setsearchData] = useState() as any;

  const onSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new window.FormData(form);
    const name = formData.get("search")?.toString();
    form.reset();
    setsearchData(name);
    setFilter(true);
  };
  return (
    <section>
      <header>
        <form onSubmit={onSubmit} className="form-filters">
          <h1>Lista de Personajes Rick y Morty</h1>
          <div className="form-item">
            <input
              placeholder="buscar por nombre"
              name="search"
              type="text"
              required
            />
          </div>
          <div className="form-item">
            <button type="submit">Buscar</button>
          </div>
          {searchData ?  <h4>Estas buscando por: {searchData}</h4> : <h4>Comienza a buscar.</h4>}
        </form>
      </header>
      <br />
      <section className="list-content">
        {filter && <ListPeopleComponent searchData={searchData} />}
      </section>
    </section>
  );
};

export default Home;
