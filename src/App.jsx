import './App.css';
import { Welcome } from './Components/Welcome/Welcome';
import { Schedule } from './Components/Schedule/Schedule';
import { Guests } from './Components/Guests/Guests';
import { Price } from './Components/Price/Price';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Welcome />
      <main >
        <Schedule />
        <Guests />
        <Price />
      </main>
      <Footer />
    </div>
  )
}

export default App;
