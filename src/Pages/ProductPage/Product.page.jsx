import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { BannerContext } from "../../context/context";

export const ProductPage = () => {
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

  const products = [
    {
      id: 1,
      imagePath: "a.jpg",
      product: "Produto 1",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo. Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. ",
      characteristics: [
        "caracteristica-1",
        "caracteristica-2",
        "caracteristica-3",
        "caracteristica-4",
      ],
      price: 16.5,
    },
    {
      id: 2,
      imagePath: "a.jpg",
      product: "Produto 2",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo. Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. ",
      characteristics: [
        "caracteristica-1",
        "caracteristica-2",
        "caracteristica-3",
      ],
      price: 169.5,
    },
    {
      id: 3,
      imagePath: "a.jpg",
      product: "Produto 3",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo. Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. ",
      characteristics: ["caracteristica-1", "caracteristica-2"],
      price: 99.5,
    },
  ];

  return (
    <>
      <Header menu={menu} />
      <Banner
        title={titlesBanner.products.title}
        subtitle={titlesBanner.products.subtitle}
      />
      <Products allProducts={products} />
      <Footer />
    </>
  );
};
