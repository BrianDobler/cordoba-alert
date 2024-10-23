"use client";

import { useEffect, useState } from 'react';
import { Select, SelectItem } from "@nextui-org/select";

interface Barrio {
  _id: string;
  nombre: string;
  codigo: number;
  coordenadas: {
    latitud: number;
    longitud: number;
  };
}

const Barrios = () => {
  const [barrios, setBarrios] = useState<Barrio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBarrios = async () => {
      try {
        const res = await fetch('/api/barrios');
        if (!res.ok) {
          throw new Error('Error al obtener los barrios');
        }
        const data = await res.json();
        console.log('Datos recibidos:', data); 
        setBarrios(data);
        
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Error desconocido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBarrios();
  }, []);

  
  return (
    
      <Select
        isRequired
        placeholder={loading ? "Cargando barrios..." : "Seleccione un barrio"}
        className="max-w-xs"
        popoverProps={{
          className: "max-h-80 overflow-auto font-light " 
        }}
      >
        {barrios.map((barrio) => (
          <SelectItem key={barrio._id} className='text-black pl-4' >
            {barrio.nombre}
          </SelectItem>
        ))}
      </Select>
      
  );
};

export default Barrios;
