"use client"
import { DatePicker, Select, SelectItem, Textarea } from "@nextui-org/react";
import Barrios from './Barrios';

export const tipoRobos = [
  { key: "robo", label: "Robo" },
  { key: "posiblerobo", label: "Posible Robo" },
  { key: "violenciagenero", label: "Violencia de Género" },
  { key: "otro", label: "Otro" }
];

export default function HtmlFormulario() {
  return (
    <form className="z-10">
      <div className="grid gap-6 mb-6 md:grid-cols-2 font-medium items-center justify-center text-gray-900" >
       
        <Select
          isRequired
         
          placeholder="Seleccione una categoría"
          className="max-w-xs bg-black/80"
        >
          {tipoRobos.map((tipoRobo) => (
            <SelectItem key={tipoRobo.key} value={tipoRobo.key} className="text-black">
              {tipoRobo.label}
            </SelectItem>
          ))}
        </Select>
        
        <Barrios />

        
        <div>
         
          <DatePicker label="Fecha" className="max-w-[284px] text-gray-950" isRequired />
        </div>

      <Textarea
      label="Description"
      placeholder="Enter your description"
      className="max-w-xs"
    />
    </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Cargar Reporte
      </button>
      <label htmlFor="fecha" className="block mb-2 text-sm font-medium  "/>
      Fecha del hecho
    </form>
  );
}
