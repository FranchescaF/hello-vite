import Header from './Header'
import Main from './Main'
import Animal from './Animal'
import './App.css' // pronto hablaremos de CSS

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Animal selectedAnimal="dog" />
    </div>
  )
}

export default App
