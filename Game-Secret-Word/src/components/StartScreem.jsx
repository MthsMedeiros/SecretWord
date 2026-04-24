
import style from './StartScreem.module.css'

const StartScreem = ({ startGame }) => {
  return (
    <div >
        <h1 className={style.tituloTelaInicial}>Secret Word</h1>
        
        <div className={style.divButtonTelaInicial}>
            <button className={style.buttonTelainicial} onClick={startGame}>Começar</button>

        </div>
    </div>
  )
}

export default StartScreem