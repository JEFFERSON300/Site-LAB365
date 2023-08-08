import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { BannerContext } from "../../context/context";
import Footer from "../../components/Footer/Footer";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

export const FaqPage = () => {
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
        title={titlesBanner.faq.title}
        subtitle={titlesBanner.faq.subtitle}
      />

      <main style={{ padding: "2rem" }}>
        <InputGroup
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form.Control
            style={{ borderRadius: "5px", height: "3rem" }}
            placeholder="Descreva brevemente sua duvida..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button
            // onClick={}
            style={{ marginLeft: "1rem", borderRadius: "5px", height: "3rem" }}
            variant="outline-warning"
            id="button-addon2"
          >
            Buscar
          </Button>
        </InputGroup>

        <Accordion defaultActiveKey="0">
          <Accordion.Item style={{ marginTop: "2rem" }} eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </main>

      <Footer />
    </>
  );
};
