import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export const HomePage = () => {
  const menu = [
    {
      label: "Produtos",
      link: "/products",
    },
    {
      label: "Contato",
      link: "/contacts",
    },

    {
      label: "FAQ",
      link: "/faq",
    },
  ];

  return (
    <>
      <Header menu={menu} />
      <p>Home is Render</p>
      <Footer />
    </>
  );
};
