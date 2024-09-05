import style from "./style.module.css";
import projects from "../../assets/mock/projects.js";

export default function Projects() {
  return (
    <div className={style.my_work}>
      <div className={style.my_work_title}>
        <h2 id="projects">Meus Últimos Projetos</h2>
      </div>

      <div className={style.my_work_container}>
        {projects.map((project, index) => {
          return <img key={index} src={project.w_img} alt="" />;
        })}
      </div>
    </div>
  );
}
