

const AlphButtons = ({onClick, letter}) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')



  return ( 
    <div className=''>
      <div className='
        h-12 flex align-center justify-start overflow-auto pl-2 w-full m-auto bar mt-[-10px] 
        sm:justify-start sm:w-5/6 sm:overflow-auto
        md:justify-start md:w-5/6 md:overflow-auto
        xl:w-full xl:justify-center
      '>
        {alphabet.map((alph) => {
          return (
            <button key={alph} value={alph} onClick={onClick}
              className={ letter === alph ? 'px-2 mx-2 text-orange-500 text-2xl' : 'px-2 mx-2'}
            >
              {alph.toUpperCase()}
            </button>
          )
        })}
      </div>
    </div> 
  )
}

export default AlphButtons;