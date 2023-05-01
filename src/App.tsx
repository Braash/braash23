import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { AuthProvider, useAuth } from "./context/AuthContext"
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

{/* <div className="flex items-center justify-center" style={{minHeight: '100vh'}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <SignUp />
        Hello
      </div>
    </div> */}
