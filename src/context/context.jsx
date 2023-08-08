import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const BannerContext = createContext({
  titlesBanner: {
    home: {
      title: "",
      subtitle: "",
    },
    products: {
      title: "",
      subtitle: "",
    },
    contact: {
      title: "",
      subtitle: "",
    },
    faq: {
      title: "",
      subtitle: "",
    },
    error: {
      title: "",
      subtitle: "",
    },
  },
  setPage: () => {},
});

export const BannerProvider = ({ children }) => {
  const [titlesBanner, setTitlesBanner] = useState({
    home: {
      title: "BikeFloripa",
      subtitle: "",
    },
    products: {
      title: "Escolha o melhor para você",
      subtitle: "Nossos produtos",
    },
    contact: {
      title: "Entre em contato conosco",
      subtitle: "Contato",
    },
    faq: {
      title: "Duvidas Frequentes",
      subtitle: "Perguntas frequentes",
    },
    error: {
      title: "Vixi Não encontramos essa página",
      subtitle: "Opssss",
    },
  });

  return (
    <>
      <BannerContext.Provider value={{ titlesBanner, setTitlesBanner }}>
        {children}
      </BannerContext.Provider>
    </>
  );
};

BannerProvider.propTypes = {
  children: PropTypes.node,
};
