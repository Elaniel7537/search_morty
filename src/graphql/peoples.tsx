import { useQuery, gql } from "@apollo/client";

// interfases
interface PARAMS_PEOPLES {
  page: number | string;
  filter: { name: string };
}

// query para obtener las personas.
export const USE_PEOPLES = (params: PARAMS_PEOPLES) => {
  const query = gql`
    query all_Peoples($page: Int, $filter: FilterCharacter) {
      characters(page: $page, filter: $filter) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          status
          image
        }
      }
    }
  `;
  return useQuery(query, { variables: { ...params } });
};

// query para obtener a una persona por ID
export const USE_PEOPLE_ITEM = (params: any) => {
  const query = gql`
    query get_People($id: ID!) {
      character(id: $id) {
        id
        name
        status
        image
      }
    }
  `;
  return useQuery(query, { variables: { ...params } });
};
