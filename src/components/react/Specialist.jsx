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
          <label className="block text-slate-800 font-semibold mb-2">Ordenar por</label>
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full bg-slate-100 border border-slate-300 rounded-lg py-2 px-4 text-slate-700 text-left focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all duration-300 flex justify-between"
            >
              {selectedOrder === "asc" ? "Ascendente (A-Z)" : "Descendente (Z-A)"}
              <span>?</span>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 w-full bg-white border rounded-lg shadow-md mt-1 z-10">
                <li 
                  className="p-2 hover:bg-slate-200 cursor-pointer"
                  onClick={() => { setSelectedOrder("asc"); setDropdownOpen(false); }}
                >
                  Ascendente (A-Z)
                </li>
                <li 
                  className="p-2 hover:bg-slate-200 cursor-pointer"
                  onClick={() => { setSelectedOrder("desc"); setDropdownOpen(false); }}
                >
                  Descendente (Z-A)
                </li>
              </ul>
            )}
          </div>

          <hr className="my-3" />

          {/* Custom Select para Especialidad */}
          <label className="block text-slate-800 font-semibold mb-2">Especialidad</label>
          <div className="relative">
            <button 
              onClick={() => setSpecialtyDropdownOpen(!specialtyDropdownOpen)}
              className="w-full bg-slate-100 border border-slate-300 rounded-lg py-2 px-4 text-slate-700 text-left focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all duration-300 flex justify-between"
            >
              {selectedSpecialty ? selectedSpecialty : "Todas"}
              <span>?</span>
            </button>
            {specialtyDropdownOpen && (
              <ul className="absolute left-0 w-full bg-white border rounded-lg shadow-md mt-1 z-10 max-h-60 overflow-y-auto">
                <li 
                  className="p-2 hover:bg-slate-200 cursor-pointer"
                  onClick={() => { setSelectedSpecialty(""); setSpecialtyDropdownOpen(false); }}
                >
                  Todas
                </li>
                {specialties.map((spec) => (
                  <li 
                    key={spec.id} 
                    className="p-2 hover:bg-slate-200 cursor-pointer"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map(({ id, prefix, name, image, specialties, categories, mp }) => (
          <div key={id} className={`bg-white p-4 rounded border border-slate-200 size-full ${selectedSpecialty && !categories.includes(selectedSpecialty) ? 'hidden' : ''}`}>
            <section className="relative">
              <img src={image} alt={name} className="w-full aspect-square object-cover object-top rounded-t" />
              <span className="absolute bg-cyan-500 text-white px-4 py-1 rounded-lg bottom-4 left-4">{prefix}</span>
            </section>
            <div className="p-4">
              <h3 className="text-xl font-bold text-slate-900">{name}</h3>
              <p className="text-cyan-500 font-semibold">MP: {mp}</p>
              <ul className="mt-4">
                {specialties.map((specialty, index) => (
                  <li key={index} className="flex items-center space-x-1 text-slate-600 text-sm">
                    <span className="size-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1" strokeLinecap="round"  strokeLinejoin="round" className="size-4 icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                    </span>
                    <span>
                      {specialty}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}