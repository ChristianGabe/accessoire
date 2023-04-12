import Profile from './profile/profile';
import children from './profil.jpg'

function App() {
  return (
    <div className="App"
    style={{ width: "400px", height: "400px", borderRadius: "20%" }} >
      <Profile fullName="Christian Gabe" bio="I am a software developer" profession="Software Developer" handleName={(name) => alert(`Name: ${name}`)}> 
      <img src={children} alt="Profile" style={{ width: "200px", height: "200px", borderRadius: "50%",padding:"20px" }} />
      </Profile>
    </div>
  );
}

export default App;
