import Link from "next/link";
import { USE_PEOPLES } from "@/graphql/peoples";

const ListPeopleComponent: React.FC<any> = ({ searchData }) => {
  const { loading, error, data } = USE_PEOPLES({
    page: 0,
    filter: { name: searchData },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Se ha producido un Error.</p>;
  if (!data.characters.results.length)
    return <p>No se encontraron personajes...</p>;

  return data.characters?.results?.map(({ id, name, status, image }: any) => (
    <div key={id} className="card-item">
      <div className="card-img" style={{ backgroundImage: `url(${image})` }}>
        <img width={200} height={150} alt={`people-${name}`} src={`${image}`} />
      </div>
      <div className="card-content">
        <h3>Nombre: {name}</h3>
        <p>Estado : {status}</p>
        <Link href={`/people/${id}`}>
          <a className="card-action">Ver Perfil</a>
        </Link>
      </div>
    </div>
  ));
};

export default ListPeopleComponent;
