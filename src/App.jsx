import { useState } from 'react'
import './App.css'
import { People } from './components/People';

function App() {

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Samuel Moreno",
      role: "Ex-Alcalde de Bogotá",
      img: "https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
    },
    {
      id: 2,
      name: "Miller Navas",
      role: "Diseñador Grafico",
      img: "https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
    },
    {
      id: 3,
      name: "Martha Ramirez",
      role: "Auxiliar de Comunicaciones",
      img: "https://img.freepik.com/vector-premium/ilustracion-vectorial-perfil-avatar-mujer-linda_1058532-14592.jpg"
    }
  ]);

  return (
    <div>
      <People
        people={people}
        setPeople={setPeople}
      />
    </div>
  )
}

export default App;
