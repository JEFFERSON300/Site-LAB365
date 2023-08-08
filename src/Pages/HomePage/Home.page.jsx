import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const HomePage = () => {
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
      <p style={{ height: "31rem" }}></p>
      <Footer />
    </>
  );
};
