import React from 'react'

/**
 * Componente GameScreem - Tela principal do jogo de adivinhação
 * 
 * Props:
 * @param {string} categorySelected - Categoria/Dica da palavra secreta
 * @param {string} wordSelected - Palavra secreta a ser adivinhada
 * @param {array} letters - Array de letras da palavra
 * @param {number} life - Número de vidas restantes
 * @param {number} score - Pontuação atual do jogador
 * @param {number} time - Tempo restante em segundos
 * @param {function} setLife - Função para atualizar as vidas
 * @param {function} setScore - Função para atualizar a pontuação
 * @param {function} setWinCondition - Função para atualizar a condição de vitória
 */
const GameScreem = ({ categorySelected, wordSelected, letters, life, score, time, setLife, setScore, setWinCondition }) => {
  // Estado que armazena a letra digitada pelo usuário
  let [letter, setLetter] = React.useState("")
  let [win, setWin] = React.useState(false)
  const inptRef = React.useRef(null)
  function focusInput() {
  inptRef.current.focus()  // ← Coloca cursor no input
}
  /**
   * PrintWordWhite - Renderiza os quadrados brancos para cada letra da palavra
   * Cria divs vazios que serão preenchidos quando o usuário acertar uma letra
   * 
   * @param {array} letters - Array contendo as letras da palavra secreta
   * @returns {JSX} - Array de elementos JSX representando os quadrados
   */
  function PrintWordWhite(letters) {
    
    return letters.map((letter, index) => (
      <div
        key={index}
        id={`letter-${index}`}
        className='text-3xl flex justify-center items-center m-5 w-15 h-15 bg-white'
      >
        {/* Espaço vazio que será preenchido com a letra correta */}
      </div>
    ))
  }

  
  React.useEffect(() => {

    let countWordSelected = wordSelected.length
    let allLettersFound = true

    for (let i = 0; i < countWordSelected; i++) {
      let element = document.getElementById(`letter-${i}`)
      while(element.firstChild){
        element.removeChild(element.firstChild)
      }
    }
    setWin(false)
    setWinCondition(win)
  }, [win])

  // Mantém o foco no input para facilitar a digitação contínua
  React.useEffect(() => {
    if(inptRef.current) {
      inptRef.current.focus()
    }
  })


  function CheckWin() {


    let countWordSelected = wordSelected.length
    let allLettersFound = true

    // Verifica se todas as letras foram encontradas
    for (let i = 0; i < countWordSelected; i++) {
      const element = document.getElementById(`letter-${i}`)
      if (!element || element.childNodes.length === 0) {
        allLettersFound = false
        break
      }
    }

    // Se todas as letras foram encontradas, ganhou!
    if (allLettersFound) {
      setScore(prevScore => prevScore + 100)
      setWin(true)
    }

    

  }
  // Verifica a condição de vitória quando as letras são atualizadas


  /**
   * GuessLetter - Verifica se a letra digitada está correta
   * Se acertou: exibe a letra nos quadrados correspondentes e anima com verde
   * Se errou: reduz uma vida e anima o input com vermelho
   * 
   * @param {string} wordSelected - Palavra secreta (não usado nesta versão)
   * @param {string} letter - Letra digitada pelo usuário
   */
  function GuessLetter(wordSelected, letter) {
    // Flag para rastrear se a letra foi encontrada
    let wrongGuess = true

    // Referência ao elemento de input da letra
    let getInputLetter = document.getElementById("input-letter")

    

    // Itera sobre cada letra da palavra secreta
    letters.forEach((l, index) => {
      // Compara a letra digitada com a letra da palavra (case-insensitive)
      if (l.toLowerCase() === letter.toLowerCase()) {
        // Cria um elemento de parágrafo com a letra
        const p = document.createElement("p")
        p.textContent = l

        // Insere a letra no quadrado correspondente
        if(document.getElementById(`letter-${index}`).children.length === 0) { // Verifica se o quadrado já não foi preenchido
        document.getElementById(`letter-${index}`).appendChild(p)
        }

        // Marca que o palpite foi correto
        wrongGuess = false

        // Aplica estilo de sucesso (borda verde) e animação de shake
        getInputLetter.className = "border-3 rounded-lg border-green-500 rounded-base bg-green-100 w-10 animate-shake"

        // Remove a animação após 500ms
        setTimeout(() => {
          getInputLetter.className = "border-3 rounded-lg border-[#eceafe] rounded-base bg-white w-10"
        }, 500)
      }
    })

    // Se a letra não foi encontrada, penaliza o jogador
    if (wrongGuess) {
      // Reduz uma vida
      setLife(prevLife => prevLife - 1)

      // Aplica estilo de erro (borda vermelha) e animação de shake
      getInputLetter.className = "border-3 rounded-lg border-[#ff0000] rounded-base bg-red-100 w-10 animate-shake"

      // Remove a animação após 500ms
      setTimeout(() => {
        getInputLetter.className = "border-3 rounded-lg border-[#eceafe] rounded-base bg-white w-10"
      }, 500)
    }
  }

  /**
   * handleSubmit - Handler do formulário de envio da letra
   * Previne o comportamento padrão, verifica a letra e limpa o input
   *  
   */
  const handleSubmit = (e) => {
    // Previne o recarregamento da página
    e.preventDefault()

    // Verifica se a letra está na palavra secreta
    GuessLetter(wordSelected, letter)

    // Verifica se o usuário ganhou
    CheckWin()

    // Limpa o input para a próxima entrada
    setLetter("")

    
   
  }

  return (
    <>
      <div className='h-full w-full flex justify-center items-center'>
        {/* 
          ====== GRID CONTAINER ======
          Container principal que organiza todos os elementos do jogo em um grid
        */}
        <div className="grid grid-cols-4 auto-rows-min gap-5 justify-center content-center">

          {/* 
            ====== TITULO DO JOGO ======
            Exibe o nome "Secret Word" com estilo gradiente
          */}
          <div className="col-span-4 flex justify-center items-center">
            <h1 className="text-5xl bg-[#eceafe] bg-clip-text text-transparent border-b-4 border-[#eceafe]">
              Secret Word
            </h1>
          </div>

          {/* 
            ====== SEÇÃO DE STATS ======
            Exibe as informações do jogo: vidas restantes, pontuação e dica
          */}
          <div className="bg-[#1e2939] flex flex-col justify-around items-center rounded-[10px] border-[5px] border-solid border-[#4f39f6]">
            <p className='text-[#eceafe] p-5'>Vidas: {life}</p>
            <p className='text-[#eceafe] p-5'>Pontuação: {score}</p>
            <p className='text-[#eceafe] p-5'>Dica: {categorySelected}</p>
          </div>

          {/* 
            ====== ÁREA DE JOGO - QUADRADOS DAS LETRAS ======
            Exibe os quadrados brancos que representam cada letra da palavra secreta
            Ocupam 2 colunas e são preenchidos conforme o usuário acerta as letras
          */}
          <div className='col-span-2 grid grid-cols-6 auto-rows-min gap-5 justify-center content-center bg-[#1e2939] border-[5px] border-[#4f39f6]'>
            {PrintWordWhite(letters)}
          </div>

          {/* 
            ====== SEÇÃO DE TEMPO ======
            Exibe o tempo restante para o jogador adivinhar a palavra
          */}
          <div className='bg-[#1e2939] border-[5px] border-[#4f39f6] flex flex-col space-y-12 justify-start items-center'>
            <p className='text-[#eceafe] text-2xl'>TEMPO</p>
            <p className='text-[#eceafe] text-4xl'>{time}</p>
          </div>

          {/* 
            ====== SEÇÃO DE ENTRADA DE LETRA ======
            Formulário onde o jogador digita uma letra para tentar adivinhar
            Valida para apenas 1 caractere e envia via handleSubmit
          */}
          <div className='bg-[#1e2939] border-[5px] border-[#4f39f6] col-span-4'>
            <form onSubmit={handleSubmit}>
              <label className='flex flex-col justify-center items-center gap-5'>
                {/* Label instruindo o usuário */}
                <p className='mt-5 text-[#eceafe]'>Digite uma letra</p>

                {/* 
                  Input controlado para a letra
                  - maxLength="1": Permite apenas 1 caractere
                  - value={letter}: Controla o valor pelo estado React
                  - onChange: Atualiza o estado a cada mudança
                */}
                <input
                  ref= {inptRef}
                  id="input-letter"
                  type="text"
                  maxLength="1"
                  className='border-3 rounded-lg border-[#eceafe] rounded-base bg-white w-10'
                  value={letter}
                  onChange={(e) => setLetter(e.target.value)}
                  required
                />
                
                {/* 
                  Botão de envio
                  Ao clicar, dispara o handleSubmit que verifica a letra
                */}
                <input
                id='btn-Enviar'
                  type="submit"
                  className='mb-5 w-50 bg-[#4f39f6] text-[white] cursor-pointer uppercase px-4 py-2 rounded-[5px] border-[none] hover:bg-[#615fff] hover:scale-110 transition duration-150 ease-in-out'
                />
              </label>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default GameScreem