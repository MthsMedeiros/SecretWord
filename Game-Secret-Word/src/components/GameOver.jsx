import React from 'react'

const GameOver = ({ score }) => {
    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center gap-10'>

                <h1 className='text-5xl bg-[#eceafe] bg-clip-text text-transparent border-b-4 border-[#eceafe]'>Game Over! Sua pontuação é: {score}</h1>
                <button onClick={() => location.reload()} className='mb-5 w-50 bg-[#4f39f6] text-[white] cursor-pointer uppercase px-4 py-2 rounded-[5px] border-[none] hover:bg-[#615fff] hover:scale-110 transition duration-150 ease-in-out'>Voltar a tela inicial</button>
            </div>
        </>
    )
}

export default GameOver