import style from "./style.module.css";

export default function Contact() {
  return (
    <section className={style.contact}>
      <h2>Contato</h2>
      <p>
        Entre em contato conosco para saber mais sobre nossos produtos e
        serviços. Estamos aqui para ajudar!
      </p>

      <form className={style.contact_form}>
        <label for="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu email"
          required
        />

        <label for="subject">Assunto</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Assunto da mensagem"
          required
        />

        <label for="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Escreva sua mensagem aqui"
          required
        ></textarea>

        <button type="submit">Enviar Mensagem</button>
      </form>

      <div className={style.contact_info}>
        <h3>Informações de Contato</h3>
        <p>Email: contato@quantumcreations.com</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua da Inovação, 123, São Paulo, SP</p>
      </div>
    </section>
  );
}
