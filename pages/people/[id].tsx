import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { USE_PEOPLE_ITEM } from "@/graphql/peoples";

const getPeople: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = USE_PEOPLE_ITEM({ id });

  return (
    <section>
      <div key={data?.character?.id} className="perfil-people">
        {loading && <p>Cargando...</p>}
        {error && <p>Se ha producido un Error.</p>}
        {!data?.character?.name && <p>No se encontraron personajes...</p>}
        <div
          className="people-img"
          style={{ backgroundImage: `url(${data?.character?.image})` }}
        >
          <img
            width={400}
            height={250}
            alt={`people-${data?.character?.name}`}
            src={`${data?.character?.image}`}
          />
        </div>

        <div className="people-info">
          <h3>Nombre: {data?.character?.name}</h3>
          <p>Estado : {data?.character?.status}</p>
          <Link href="/">
            <a className="card-action">Volver al home</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default getPeople;
