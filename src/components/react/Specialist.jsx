import { useState } from "react";
import { profesionals } from "../../data/profesionals"; 
import { specialties } from "../../data/specialties"; 

export default function DoctorFilter() {
  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [specialtyDropdownOpen, setSpecialtyDropdownOpen] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState(profesionals);

  const handleApplyFilters = () => {
    const sortedDoctors = [...profesionals]
      .filter((doctor) => 
        !selectedSpecialty || doctor.categories.includes(selectedSpecialty)
      )
      .sort((a, b) => {
        return selectedOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });

    setFilteredDoctors(sortedDoctors);
    setIsOpen(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg mb-6 transition-all duration-300"
      >
        Filtros
      </button>

      {isOpen && (
        <div className="bg-white shadow-2xl p-6 rounded-lg absolute z-20 w-80 left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-300">
          {/* Custom Select para Ordenar */}
          <label className="block text-gray-800 font-semibold mb-2">Ordenar por</label>
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all duration-300 flex justify-between"
            >
              {selectedOrder === "asc" ? "Ascendente (A-Z)" : "Descendente (Z-A)"}
              <span>?</span>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 w-full bg-white border rounded-lg shadow-md mt-1 z-10">
                <li 
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => { setSelectedOrder("asc"); setDropdownOpen(false); }}
                >
                  Ascendente (A-Z)
                </li>
                <li 
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => { setSelectedOrder("desc"); setDropdownOpen(false); }}
                >
                  Descendente (Z-A)
                </li>
              </ul>
            )}
          </div>

          <hr className="my-3" />

          {/* Custom Select para Especialidad */}
          <label className="block text-gray-800 font-semibold mb-2">Especialidad</label>
          <div className="relative">
            <button 
              onClick={() => setSpecialtyDropdownOpen(!specialtyDropdownOpen)}
              className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all duration-300 flex justify-between"
            >
              {selectedSpecialty ? selectedSpecialty : "Todas"}
              <span>?</span>
            </button>
            {specialtyDropdownOpen && (
              <ul className="absolute left-0 w-full bg-white border rounded-lg shadow-md mt-1 z-10 max-h-60 overflow-y-auto">
                <li 
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => { setSelectedSpecialty(""); setSpecialtyDropdownOpen(false); }}
                >
                  Todas
                </li>
                {specialties.map((spec) => (
                  <li 
                    key={spec.id} 
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => { setSelectedSpecialty(spec.name); setSpecialtyDropdownOpen(false); }}
                  >
                    {spec.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <button 
              onClick={handleApplyFilters}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Aceptar
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Cards de Doctores Mejoradas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doctor) => (
          <div 
            key={doctor.id} 
            className="p-4 bg-white shadow-md border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200"
          >
            <div className="relative">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full aspect-square object-cover object-top rounded-2xl"
              />
              <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-lg text-sm">
                {doctor.prefix}
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-4">{doctor.name}</h2>
            <p className="text-gray-600 mt-1">MP: {doctor.mp}</p>
            <div className="flex flex-wrap gap-1 mt-6">
              {doctor.specialties.map((spec) => (
                <span key={spec} className="bg-rose-100 text-primary-600 px-2 py-1 text-xs rounded-full">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}