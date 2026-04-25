import React from 'react'


const GameScreem = ({ categorySelected, wordSelected, letters, life, score, time }) => {
  return (
    <>
      {/* ====== GRID CONTAINER ====== */}
      <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-25">
        
        {/* ====== TITULO ====== */}
        <div className="col-[span_3] flex justify-center items-center">
          <h1 className="text-5xl bg-[#eceafe] bg-clip-text text-transparent border-b-4 border-[#eceafe]">
            Secret Word
          </h1>
        </div>

        {/* ====== STATS (Vidas, Pontuação) ====== */}
        <div className="bg-[#1e2939] flex flex-col justify-around items-center rounded-[10px] border-[5px] border-solid border-[#4f39f6]">
          <p className='text-[#eceafe] p-5'>Vidas: {life}</p>
          <p className='text-[#eceafe] p-5'>Pontuação: {score}</p>
          <p className='text-[#eceafe] p-5'>Dica: {categorySelected} </p>
          
        </div>

        {/* ====== AREA DO JOGO ====== */}
        <div>
          <p className='bg-[#1e2939] border-[5px] border-[#4f39f6]'>jogo</p>
        </div>

        <div className='bg-[#1e2939] border-[5px] border-[#4f39f6] flex flex-col space-y-12 justify-start items-center'>
          <p className='text-[#eceafe] text-2xl '>TEMPO</p>
          <p className='text-[#eceafe] text-4xl'>{time}</p>

        </div>

        <div className='bg-[#1e2939] border-[5px] border-[#4f39f6] col-span-3'>
          <form >
            <label className='flex flex-col justify-center items-center gap-5'>
              <p className='text-[#eceafe]'>Digite uma letra</p>
              <input type="text" maxLength="1" className='border-3 rounded-lg border-[#eceafe] rounded-base bg-white w-10 ' />
              <input type="submit" className='w-50 bg-[#4f39f6] text-[white] cursor-pointer uppercase px-4 py-2 rounded-[5px] border-[none] hover:bg-[#615fff] hover:scale-110 transition duration-150 ease-in-out ' />
            </label>
          </form>

        </div>

      </div>
    </>
  )
}

export default GameScreem