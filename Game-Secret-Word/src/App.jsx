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
  

  function StartGame (){
    setGameStage(stages[1].name)
    
    setCategory(Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)])
    
    
    
  }

  function GameEnd() {
    setGameStage(stages[2].name)
  }

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

  useEffect(() => {
    console.log(categorySelected)
    console.log(wordSelected)
    console.log(letters)
  }, [categorySelected, wordSelected, letters])

  return (
    <>
      <div className='flex flex-col items-center justify-start h-screen'>
        {gameStage === 'start' && <StartScreem startGame={StartGame} />}
        {gameStage === 'game' && <GameScreem gameEnd={GameEnd} categorySelected={categorySelected} wordSelected={wordSelected} />}

      </div>
    </>
  )
}

export default App
