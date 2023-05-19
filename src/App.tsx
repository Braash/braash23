import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext"
import Navigation from './components/Navigation/Navigation'

function App() {  
  return (
    <BrowserRouter>
        <AuthProvider>
            <Navigation />
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
