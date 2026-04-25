const StartScreem = ({ startGame }) => {
  return (
    <>
      {/* ====== CONTAINER PRINCIPAL ====== */}
      <div className="w-full flex flex-col justify-center items-center gap-10">
        {/* ====== TITULO ====== */}
        <h1 className="text-[7rem] bg-[#eceafe] bg-clip-text text-transparent border-b-4 border-[#eceafe]">Secret Word</h1>
        
        {/* ====== BOTAO COMEÇAR ====== */}
        <div>
          <button className="text-2xl bg-[#4f39f6] text-[white] cursor-pointer uppercase px-8 py-4 rounded-[10px] border-[none] hover:bg-[#615fff] hover:scale-120 transition duration-150 ease-in-out" onClick={startGame}>Começar</button>
        </div>
      </div>
    </>
  )
}

export default StartScreem