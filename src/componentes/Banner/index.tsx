import estilos from './Banner.module.scss';

const Banner = () => {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>Vamos escolher o que comer?</h1>
      <p> :)</p>
    </div>
  </section>)
}

export default Banner