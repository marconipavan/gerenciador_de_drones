// src/App.tsx

import { useState, useEffect } from "react";

import DroneList from "./components/DroneList";
import DroneForm from "./components/DroneForm";

export interface Drone {
  id: number;
  modelo: string;
  capacidade: number;
  autonomia: number;
}

function App() {
  const [drones, setDrones] = useState<Drone[]>([]);
;
  // rodando no mount do componente (apenas uma vez)
  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const response = await fetch("http://localhost:3000/drones");
        
        if(!response.ok)
          throw new Error("Erro ao buscar drones");
        
        const data: Drone[] = await response.json();

        setDrones(data); // atualizar o estado faz o componente re-renderizar

      } catch (error) {
        console.error("Erro ao buscar drones:", error);
      }
    };

    fetchDrones();

  }, []);

  return (
    <div className="App">
      <h1>Gerenciador de Drones</h1>

      <h2>Adicionar Novo Drone</h2>
      <DroneForm onAddDrone={(drone) => {
        setDrones([...drones, { id: drones.length + 1, ...drone }]);
      }} />
      
      <hr />
      
      <h2>Lista de Drones</h2>

      <DroneList drones={drones} />

    </div>
  );
}

export default App;