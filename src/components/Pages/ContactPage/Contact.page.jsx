import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import { FormContactComponent } from "../../FormContact/FormContact.component";
import { CardContactComponent } from "../../CardContact/CardContact.component";

export const ContactPage = () => {
  const menu = [
    {
      label: "Produtos",
    },
    {
      label: "Contatos",
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
