import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Products from "../../Products/Products";
import Footer from "../../Footer/Footer";

export const ProductPage = () => {
  const menu = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Contatos",
      link: "/faq",
    },
  ];

  const products = [
    {
      id: 1,
      imagePath: "a.jpg",
      product: "prod1",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo. Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo.",
      characteristics: ["a", "b", "c", "d"],
    },
    {
      id: 2,
      imagePath: "a.jpg",
      product: "prod2",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo.",
      characteristics: ["a", "b", "c"],
    },
    {
      id: 3,
      imagePath: "a.jpg",
      product: "prod3",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo.",
      characteristics: ["a", "b"],
    },
  ];

  return (
    <>
      <Header menu={menu} />
      <Banner />
      <Products allProducts={products} />
      <Footer />
    </>
  );
};
