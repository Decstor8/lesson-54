import './App.css'
import PlayingField from "./components/Game/PlayingField.tsx";

const App: React.FC = () => {
    return (
        <div className="app">
            <h1 className='main-title'>Добро пожаловать!</h1>
            <p className='description-main'>Испытайте свою удачу и выберите правильный квадрат!</p>
            <PlayingField/>
        </div>
    );
};

export default App
