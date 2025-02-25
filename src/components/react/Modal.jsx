import { useState, useEffect } from "react";
import { profesionals } from "../../data/profesionals"; 
import { specialties } from "../../data/specialties"; 

export default function DoctorFilter() {
  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleApplyFilters();
  }, []);

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
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg mb-6 transition-all duration-300"
      >
        Filtros
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white shadow-2xl p-6 rounded-lg w-full max-w-3xl md:max-w-5xl relative min-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-bold">Filtros</h2>
              <button onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 hover:text-red-500"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            
            <div className="flex-grow flex flex-col justify-center">
              <label className="block text-slate-800 font-semibold mb-2">Ordenar por</label>
              <div className="flex gap-4 mb-4">
                <button 
                  className={`w-1/2 py-2 rounded-lg border ${selectedOrder === "asc" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => setSelectedOrder("asc")}>
                  Ascendente
                </button>
                <button 
                  className={`w-1/2 py-2 rounded-lg border ${selectedOrder === "desc" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}
                  onClick={() => setSelectedOrder("desc")}>
                  Descendente
                </button>
              </div>

              <label className="block text-slate-800 font-semibold mb-2">Especialidad</label>
              <input 
                type="text" 
                placeholder="Buscar especialidad..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 text-gray-700 mb-2"
              />
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 max-h-40 overflow-y-auto flex flex-wrap gap-2 justify-center">
                {specialties.filter(spec => spec.name.toLowerCase().includes(search.toLowerCase())).length > 0 ? (
                  specialties.filter(spec => spec.name.toLowerCase().includes(search.toLowerCase())).map((spec) => (
                    <button 
                      key={spec.id} 
                      onClick={() => setSelectedSpecialty(spec.name)}
                      className={`py-2 px-4 rounded-full text-sm font-medium ${selectedSpecialty === spec.name ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                      {spec.name}
                    </button>
                  ))
                ) : (
                  <p className="text-center text-gray-500 w-full">No se encontró especialidad.</p>
                )}
              </div>
            </div>

            <div className="mt-auto">
              <hr className="my-4" />
              <button 
                onClick={handleApplyFilters}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition-all duration-300 float-right"
              >
                Aplicar filtros
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mostrar tarjetas dinámicas de doctores */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-xl transition-all">
              <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full object-cover border" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">No hay doctores disponibles.</p>
        )}
      </div>
    </>
  );
}
