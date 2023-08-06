import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import { FormContactComponent } from "../../FormContact/FormContact.component";
import { CardContactComponent } from "../../CardContact/CardContact.component";

export const ContactPage = () => {
  const menu = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Produtos",
      link: "/products",
    },
  ];
  return (
    <>
      <Header menu={menu} />
      <Banner />
      <FormContactComponent />
      <CardContactComponent />
      <Footer />
    </>
  );
};
