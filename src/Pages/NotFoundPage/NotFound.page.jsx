import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { BannerContext } from "../../context/context";
import Footer from "../../components/Footer/Footer";
import { TbError404 } from "react-icons/tb";

export const NotFoundPage = () => {
  const { titlesBanner, setTitlesBanner } = useContext(BannerContext);
  const menu = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Produtos",
      link: "/products",
    },
    {
      label: "Contato",
      link: "/contact",
    },
    {
      label: "FAQ",
      link: "/faq",
    },
  ];

  return (
    <>
      <Header menu={menu} />
      <Banner
        title={titlesBanner.error.title}
        subtitle={titlesBanner.error.subtitle}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "30rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Página não encontrada</h2>

        <TbError404 size={"6rem"} />
      </div>

      <Footer />
    </>
  );
};
