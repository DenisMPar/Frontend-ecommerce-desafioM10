import css from "./Index.module.css";

//componente que muestra un spinner de carga
function Spinner() {
  return (
    <div className={css.wrapper}>
      <div className={css["lds-dual-ring"]}></div>
    </div>
  );
}

export { Spinner };
