import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import { FormContactComponent } from "../../FormContact/FormContact.component";
import { CardContactComponent } from "../../CardContact/CardContact.component";
import { useContext } from "react";
import { BannerContext } from "../../../context/context";

export const ContactPage = () => {
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
  ];
  return (
    <>
      <Header menu={menu} />
      <Banner
        title={titlesBanner.contact.title}
        subtitle={titlesBanner.contact.subtitle}
      />
      <FormContactComponent />
      <CardContactComponent />
      <Footer />
    </>
  );
};
