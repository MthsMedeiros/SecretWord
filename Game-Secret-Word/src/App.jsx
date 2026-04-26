//react
import { useState, useEffect, useCallback, use } from 'react'

//data
import { wordsList } from './data/words'

//components
import StartScreem from './components/StartScreem'
import GameScreem from './components/GameScreem'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {



  const [gameStage, setGameStage] = useState(stages[0].name) //start, game, end

  const [words] = useState(wordsList)


  let [wordSelected, setWordSelected] = useState("")
  let [categorySelected, setCategory] = useState("")
  let [letters, setLetters] = useState([])

  let [life, setLife] = useState(3)
  let [score, setScore] = useState(0)
  let [time, setTime] = useState(90)

  let [winCondition, setWinCondition] = useState(false)

  function StartGame() {
    setGameStage(stages[1].name)

    setCategory(Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)])



  }

  function RestartGame(winCondition) {
    if (winCondition) {
      setLife(prevLife => prevLife + 1)
      setTime(prevTime => prevTime + 10)
      StartGame()
    }
  }

  function GameEnd() {
    let writeWordSelected = wordSelected.split("")
    let countWordSelected = wordSelected.length

    for (let i = 0; i < countWordSelected; i++) {
      let element = document.getElementById(`letter-${i}`)
      let p = document.createElement("p")
      p.textContent = writeWordSelected[i]
      p.className = 'text-red-500'
      while (!element.firstChild) {
        if (document.getElementById(`letter-${i}`).children.length === 0) { // Verifica se o quadrado já não foi preenchido
          document.getElementById(`letter-${i}`).appendChild(p)
          

        }
      }
      setInterval(() => {
        setGameStage(stages[2].name)
      }, 4000);
      
    }
  }
    useEffect(() => {
      if (life <= 0 || time <= 0) {
        GameEnd()
      }
    }, [life, time])

    useEffect(() => {
      if (gameStage !== 'game') return

      const timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime - 1 <= 0) {
            GameEnd()
            return 0
          }
          return prevTime - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }, [gameStage])

    useEffect(() => {
      if (categorySelected) {
        setWordSelected(words[categorySelected][Math.floor(Math.random() * words[categorySelected].length)])

      }

    }, [categorySelected])

    useEffect(() => {
      if (wordSelected) {
        setLetters(wordSelected.split(""))
      }
    }, [wordSelected])

    // Verifica a condição de vitória e reinicia o jogo se ganhou
    useEffect(() => {

      RestartGame(winCondition)
    }, [winCondition])


    return (
      <>
        {/* ====== MAIN CONTAINER ====== */}
        <div className='flex flex-col items-center justify-start h-screen'>

          {/* ====== TELA DE INICIO ====== */}
          {gameStage === 'start' && <StartScreem startGame={StartGame} />}

          {/* ====== TELA DE JOGO ====== */}
          {gameStage === 'game' && <GameScreem gameEnd={GameEnd}
            categorySelected={categorySelected}
            wordSelected={wordSelected}
            letters={letters}
            life={life}
            score={score}
            time={time}
            setLife={setLife}
            setScore={setScore}
            startGame={StartGame}
            setWinCondition={setWinCondition} />}

          {/* ====== TELA DE FIM DE JOGO ====== */}
          {gameStage === 'end' && <GameOver score={score} />}

        </div>
      </>
    )
  }

  export default App
