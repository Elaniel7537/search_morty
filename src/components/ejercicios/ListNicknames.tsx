import React from "react";

interface propsNickNames {
  names: Array<{}>;
  order: String;
}

const Listnicknames: React.FC<propsNickNames> = ({ names, order }) => {
  return (
    <>
      <h1>
        {order.toUpperCase() === "ASC"
          ? "Lista Ascendente"
          : "Lista descendente"}
      </h1>
      <ul>
        {order.toUpperCase() === "ASC"
          ? Object.values(names).map((resp: any, index: any) => {
              return <li key={index}>{resp}</li>;
            })
          : Object.values(names)
              .reverse()
              .map((resp: any, index: any) => {
                return <li key={index}>{resp}</li>;
              })}
      </ul>
    </>
  );
};

export default Listnicknames;
