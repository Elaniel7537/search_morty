import React from "react";
// components
import Listnicknames from "@/components/ejercicios/ListNicknames";

const pageEjercicios: React.FC = () => {
  return (
    <Listnicknames
      names={["Alejandro", "Balsamo", "Camila", "Zuyexi", "Candas"]}
      order="des"
    />
  );
};

export default pageEjercicios;
