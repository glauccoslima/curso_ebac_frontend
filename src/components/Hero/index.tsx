// Importa os estilos específicos do componente Hero
import styles from './Hero.module.css'

// Define o componente Hero como uma função arrow
const Hero = () => (
  // Retorna o elemento da seção para representar o banner
  <section className={styles.form}>
    <div className="container">
      {/* Utiliza um elemento h1 para exibir o título principal */}
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </section>
)

// Exporta o componente Hero para ser usado em outros arquivos
export default Hero
