import ToDoItem from "./ToDoItem";

export default function TodoList() {
  const TASKS = [
    "Comprar leite",
    "Estudar React",
    "Ler um livro",
    "Fazer exercícios",
    "Enviar e-mails",
    "Preparar o jantar",
    "Limpar a casa",
    "Fazer compras no mercado",
    "Organizar o escritório",
    "Lavar a roupa",
    "Visitar um amigo",
    "Assistir a um filme",
    "Trabalhar no projeto",
    "Atualizar o currículo",
    "Cuidar das plantas",
    "Agendar consultas médicas",
    "Estudar para o exame",
    "Preparar a apresentação",
    "Realizar uma reunião",
    "Pagar as contas",
    "Fazer uma caminhada",
    "Testar novas receitas",
    "Ler artigos de tecnologia",
    "Planejar as férias",
    "Comprar um presente",
    "Meditar",
    "Revisar o código",
    "Fazer um backup dos dados",
    "Participar de um curso online",
    "Organizar fotos e documentos",
    "Limpar a garagem",
    "Fazer uma viagem curta",
    "Verificar a validade dos documentos",
    "Atualizar as redes sociais",
  ];
  return (
    <div>
      <ul>
        {TASKS.map((task) => (
          <ToDoItem task={task} />
        ))}
      </ul>
    </div>
  );
}
