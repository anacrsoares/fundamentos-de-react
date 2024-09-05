import style from "./style.module.css";
import call from "../../assets/icons/call_icon.svg";
import mail from "../../assets/icons/mail_icon.svg";
import location from "../../assets/icons/location_icon.svg";

export default function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.contact_title}>
        <h2 id="contact">Contato</h2>
      </div>

      <div className={style.contact_section}>
        <div className={style.contact_left}>
          <h3>Entre em contato</h3>

          <div className={style.contact_details}>
            <div className={style.contact_detail}>
              <img src={call} alt="" />
              <p>anacrsoares-@outlook.com</p>
            </div>
            <div className={style.contact_detail}>
              <img src={mail} alt="" />
              <p>+55 (31) 99525-5032</p>
            </div>
            <div className={style.contact_detail}>
              <img src={location} alt="" />
              <p>SP, Brasil</p>
            </div>
          </div>
        </div>

        <form className={style.contact_right}>
          <label htmlFor="">Seu nome:</label>
          <input type="text" placeholder="Digite seu nome" name="name" />

          <label htmlFor="">Email:</label>
          <input type="email" placeholder="Digite o seu email" name="email" />

          <label htmlFor="">Mensagem</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Digite aqui a sua mensagem"
          ></textarea>

          <button type="submit" className={style.contact_submit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
