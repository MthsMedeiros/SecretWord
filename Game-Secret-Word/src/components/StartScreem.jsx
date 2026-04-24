


const StartScreem = ({ startGame }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-[7rem] bg-linear-to-b from-[#7ca7df] to-white bg-clip-text text-transparent">Secret Word</h1>
        
        <div >
            <button className="text-2xl bg-[#7ca7df] text-[white] cursor-pointer uppercase px-8 py-4 rounded-[10px] border-[none] hover:bg-[#5a8ac6] hover:scale-120 transition duration-150 ease-in-out;" onClick={startGame}>Começar</button>

        </div>
    </div>
  )
}

export default StartScreem