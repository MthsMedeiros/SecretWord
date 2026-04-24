import React from 'react'


const GameScreem = ({ categorySelected, wordSelected, letters }) => {
  return (
    <>
    <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] gap-[100px]">
      <div className="col-[span_3] flex justify-center" >
        <h1 className="text-5xl bg-linear-to-b from-[#7ca7df] to-white bg-clip-text text-transparent">Secret Word</h1>
      </div>
      <div className="flex flex-col justify-around items-center rounded-[10px] border-[5px] border-solid border-black">
        <p >Vidas: 0</p>
        <p >Pontuação: 0</p>
        <p >Tempo: 0</p>
      </div>
      <div >
        <p className='border-10'>jogo</p>
      </div>

    </div>
    </>
  )
}

export default GameScreem