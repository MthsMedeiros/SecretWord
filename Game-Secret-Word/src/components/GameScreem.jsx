import React from 'react'


const GameScreem = ({ categorySelected, wordSelected, letters, life, score, time, setLife }) => {
  // Função que renderiza quadrados brancos para cada letra da palavra
  function PrintWordWhite(letters) {
    // Mapeia o array de letras e retorna um div branco para cada uma
    return letters.map((letter, index) => (
      <div key={index} id={`letter-${index}`} className='text-3xl flex justify-center items-center m-5 w-15 h-15 bg-white'></div>
    ))
  }
  // Exibe a palavra secreta no console para fins de teste
  // Função que verifica se a letra digitada existe na palavra secreta
  function GuessLetter(wordSelected, letter){
    let wrongGuess = true
    let getInputLetter = document.getElementById("input-letter")
    console.log( letters) // Exibe a letra digitada e a palavra secreta no console para fins de teste
    // Transforma a palavra em um array de letras e percorre cada uma
    letters.forEach((l, index) => {
      // Se a letra digitada for igual à letra atual da palavra
      if(l.toLowerCase() === letter.toLowerCase()){
        // Exibe a letra correta no quadrado correspondente
        const p = document.createElement("p")
        p.textContent = l
        document.getElementById(`letter-${index}`).appendChild(p)
        wrongGuess = false
        getInputLetter.className = "border-3 rounded-lg border-green-500 rounded-base bg-green-100 w-10 animate-shake"
        setTimeout(() => {
          getInputLetter.className = "border-3 rounded-lg border-[#eceafe] rounded-base bg-white w-10"
        }, 500)
      }
    })
    if(wrongGuess){
      setLife(prevLife => prevLife - 1)
      getInputLetter.className = "border-3 rounded-lg border-[#ff0000] rounded-base bg-red-100 w-10 animate-shake"
      setTimeout(() => {
        getInputLetter.className = "border-3 rounded-lg border-[#eceafe] rounded-base bg-white w-10"
      }, 500)
    }
  }

  // Função que trata o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault() // Previne o recarregamento da página
    GuessLetter(wordSelected, letter)
    setLetter("") // Limpa o input da letra
  }

  // Estado que armazena a letra digitada pelo usuário
  let [letter, setLetter] = React.useState("")
  return (

    <><div className='h-full w-full flex justify-center items-center'>
      {/* ====== GRID CONTAINER ====== */}
      <div className="grid grid-cols-4 auto-rows-min gap-5 justify-center content-center ">

        {/* ====== TITULO ====== */}
        <div className="col-span-4 flex justify-center items-center">
          <h1 className="text-5xl bg-[#eceafe] bg-clip-text text-transparent border-b-4 border-[#eceafe]">
            Secret Word
          </h1>
        </div>

        {/* ====== STATS (Vidas, Pontuação) ====== */}
        {/* Exibe as informações do jogo: vidas restantes, pontuação e dica da categoria */}
        <div className="bg-[#1e2939] flex flex-col justify-around items-center rounded-[10px] border-[5px] border-solid border-[#4f39f6]">
          <p className='text-[#eceafe] p-5'>Vidas: {life}</p>
          <p className='text-[#eceafe] p-5'>Pontuação: {score}</p>
          <p className='text-[#eceafe] p-5'>Dica: {categorySelected} </p>

        </div>

        {/* ====== AREA DO JOGO ====== */}
        {/* Exibe os quadrados brancos representando cada letra da palavra secreta */}
        <div className='col-span-2 grid grid-cols-6 auto-rows-min gap-5 justify-center content-center bg-[#1e2939] border-[5px] border-[#4f39f6]'>
          {PrintWordWhite(letters)}
        </div>

        <div className='bg-[#1e2939] border-[5px] border-[#4f39f6] flex flex-col space-y-12 justify-start items-center'>
          {/* Exibe o tempo restante do jogo */}
          <p className='text-[#eceafe] text-2xl '>TEMPO</p>
          <p className='text-[#eceafe] text-4xl'>{time}</p>

        </div>

        <div className='bg-[#1e2939] border-[5px] border-[#4f39f6] col-span-4'>
          {/* Formulário para o usuário digitar uma letra */}
          <form onSubmit={handleSubmit} >
            <label className='flex flex-col justify-center items-center gap-5'>
              <p className='mt-5 text-[#eceafe]'>Digite uma letra</p>
              {/* Input controlado que armazena a letra digitada */}
              <input id="input-letter" type="text" maxLength="1" className='border-3 rounded-lg border-[#eceafe] rounded-base bg-white w-10 ' value={letter} onChange={(e) => setLetter(e.target.value)} />
              {/* Botão para enviar a letra */}
              <input type="submit" className='mb-5 w-50 bg-[#4f39f6] text-[white] cursor-pointer uppercase px-4 py-2 rounded-[5px] border-[none] hover:bg-[#615fff] hover:scale-110 transition duration-150 ease-in-out ' />
            </label>
          </form>

        </div>

      </div>
    </div>
    </>
  )}

export default GameScreem