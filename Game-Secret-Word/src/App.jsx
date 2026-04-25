//react
import { useState, useEffect, useCallback, use } from 'react'

//data
import { wordsList } from './data/words'

//components
import StartScreem from './components/StartScreem'
import GameScreem from './components/GameScreem'

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
  

  function StartGame (){
    setGameStage(stages[1].name)
    
    setCategory(Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)])
    
    
    
  }

  function GameEnd() {
    setGameStage(stages[2].name)
  }

  useEffect(() => {
    if(gameStage !== 'game') return
    
    const timer = setInterval(() => {
      setTime(prevTime => {
        if(prevTime - 1 <= 0) {
          GameEnd()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)
    
    return () => clearInterval(timer)
  }, [gameStage])

  useEffect(() => {
    if(categorySelected){
      setWordSelected(words[categorySelected][Math.floor(Math.random() * words[categorySelected].length)])
      
    }
    
  }, [categorySelected])  

  useEffect(() => {
    if(wordSelected){
      setLetters(wordSelected.split(""))
    }
  }, [wordSelected])

  

  return (
    <>
      {/* ====== MAIN CONTAINER ====== */}
      <div className='flex flex-col items-center justify-start h-screen'>
        
        {/* ====== TELA DE INICIO ====== */}
        {gameStage === 'start' && <StartScreem startGame={StartGame} />}
        
        {/* ====== TELA DE JOGO ====== */}
        {gameStage === 'game' && <GameScreem gameEnd={GameEnd} categorySelected={categorySelected} wordSelected={wordSelected} letters={letters} life={life} score={score} time={time} />}

      </div>
    </>
  )
}

export default App
