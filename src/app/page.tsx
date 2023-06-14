import Player from './components/player'
import Main from './components/main'
import Aside from './components/aside'

const Home = () => {

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Aside/>
          <Main/>
        </div>
          <Player/>
      </div>
    </>
  )
}

export default Home;