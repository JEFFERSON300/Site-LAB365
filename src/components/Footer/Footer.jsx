import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="d-flex flex-wrap text-light pt-33 ps-37 gap-5">
        <div className="wd-30">
          <a className="nav-link active fw-bold fs-2 " href="#">
            BikeFloripa
          </a>
        </div>

        <div className="wd-30 ">
          <div className="fs-4 text-uppercase">Contato</div>
          <div className="fs-6 pt-3">+55 31 99999-9999</div>
          <div className="fs-6 ">contato@suaempresa.com</div>
          <hr></hr>
          <div className="fs-6 pt-3">Rua das Cabras, 99 - Bairro Novo</div>
          <div className="fs-6 ">Santa Catarina - SC</div>
          <hr></hr>
          <div className="">
            <a href="#" className="pe-3">
              <InstagramIcon sx={{ color: "white", fontSize: 30 }} />
            </a>
            <a href="#" className="pe-3">
              <FacebookIcon sx={{ color: "white", fontSize: 30 }} />
            </a>
            <a href="#">
              <YouTubeIcon sx={{ color: "white", fontSize: 30 }} />
            </a>
          </div>
        </div>

        <div className="wd-30 ">
          <div className="fs-4 text-uppercase">Informações</div>
          <ul className="list-unstyled pt-3">
            <li>
              <a className="nav-link active" href="#">
                Produtos
              </a>
            </li>
            <li className="pt-16">
              <a className="nav-link active" href="#">
                Contatos
              </a>
            </li>
            <li className="pt-16">
              <a className="nav-link active" href="#">
                Termos e Condições
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-light text-center fs-7 pt-3">
        Minha empresa. Todos os direitos reservados.
      </div>
    </div>
  );
}

export default Footer;
