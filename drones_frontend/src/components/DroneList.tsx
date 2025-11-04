import type { Drone } from '../App';

// define o formato das props
interface DroneListProps {
  drones: Drone[];
}

export function DroneList({ drones }: DroneListProps) {
  return (
    <ul>
      {drones.map((drone) => (
        <li key={drone.id}>
          Modelo: {drone.modelo}, Capacidade: {drone.capacidade}MP, Autonomia: {drone.autonomia} min
        </li>
      ))}
    </ul>
  );
}

export default DroneList;
