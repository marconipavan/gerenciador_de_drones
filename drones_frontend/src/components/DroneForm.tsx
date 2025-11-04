import { useState } from "react";

interface DroneFormProps {
  onAddDrone: (drone: { modelo: string; capacidade: number; autonomia: number }) => void;
}

export function DroneForm({ onAddDrone }: DroneFormProps) {
  const [modelo, setModelo] = useState("");
  const [capacidade, setCapacidade] = useState(0);
  const [autonomia, setAutonomia] = useState(0);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!modelo)
      return alert("Modelo é obrigatório");

    onAddDrone({ modelo, capacidade, autonomia });

    // resetar o formulário
    setModelo("");
    setCapacidade(0);
    setAutonomia(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Modelo:</label>
        <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
      </div>
      <div>
        <label>Capacidade (MP):</label>
        <input type="number" value={capacidade} onChange={(e) => setCapacidade(Number(e.target.value))} />
      </div>
      <div>
        <label>Autonomia (min):</label>
        <input type="number" value={autonomia} onChange={(e) => setAutonomia(Number(e.target.value))} />
      </div>
      <button type="submit">Adicionar Drone</button>
    </form>
  );
}

export default DroneForm;