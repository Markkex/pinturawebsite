import style from "../../styles/HeaderSection.module.css";

export default function HeaderSection() {
  return (
    <div>
      <div className={style.headerSection}></div>
      <div className={style.bgText}>
        <h1>Venha dar uma nova cor a sua casa.</h1>

        <br />
        <hr />
        <br />

        <h3>
          Oferecemos soluções para pintura, revestimento e protecção dos seus
          projectos.
        </h3>
      </div>
    </div>
  );
}
