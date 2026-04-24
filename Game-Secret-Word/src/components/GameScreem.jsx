import React from 'react'
import style from './GameScreem.module.css'

const GameScreem = ({ categorySelected, wordSelected, letters }) => {
  return (
    <>
    <div className={style.GameScreem}>
      <div className={style.divTituloTelaGame} >
        <h1 className={style.tituloTelaGame}>Secret Word</h1>
      </div>
      <div className={style.divVidasTempoPontuacao}>
        <p className={style.Vidas}>Vidas: 0</p>
        <p className={style.pontuacao}>Pontuação: 0</p>
        <p className={style.tempo}>Tempo: 0</p>
      </div>
      <div className={style.divPrincipalGame}>
        <p>jogo</p>
      </div>

    </div>
    </>
  )
}

export default GameScreem