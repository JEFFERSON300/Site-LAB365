import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { FormContactComponent } from "../../components/FormContact/FormContact.component";
import { CardContactComponent } from "../../components/CardContact/CardContact.component";
import { useContext } from "react";
import { BannerContext } from "../../context/context";

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
        title={titlesBanner.contact.title}
        subtitle={titlesBanner.contact.subtitle}
      />
      <FormContactComponent />
      <CardContactComponent />
      <Footer />
    </>
  );
};
