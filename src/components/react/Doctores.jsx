import { useState } from "react";
import { profesionals } from "../../data/profesionals";
import { specialties } from "../../data/specialties";

export default function DoctorFilter() {
  const [selectedOrder, setSelectedOrder] = useState("asc");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
    <>
      <section className="w-full flex justify-end mb-6">
        <button onClick={() => setIsOpen(true)} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
          Filtros
        </button>
      </section>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-500/50 flex justify-center items-center z-[100] px-5">
          <div className="bg-white shadow-2xl p-6 rounded-lg w-full max-w-md sm:w-full md:max-w-lg relative max-h-[90vh] mx-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-600">Filtros</h2>
              <button onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 text-slate-400 hover:text-rose-500 hover:cursor-pointer"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <hr className="border-gray-200 sm:mx-auto my-4" />

            <div className="flex items-center justify-between bg-yellow-100">
              <label className="text-slate-600 font-semibold bg-red-100 py-2.5">Ordenar por</label>
              <div className="flex space-x-4">
                <button className={`focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition-all duration-200 ${selectedOrder === "asc" ? "bg-primary-500 text-white" : "bg-slate-100 text-slate-600"}`} onClick={() => setSelectedOrder("asc")}>
                  Asc
                </button>
                <button
                  className={`focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition-all duration-200 ${selectedOrder === "desc" ? "bg-primary-500 text-white": "bg-slate-100 text-slate-600"}`} onClick={() => setSelectedOrder("desc")}>
                  Desc
                </button>
              </div>
            </div>

            <hr className="border-gray-200 sm:mx-auto my-4" />

            <div>
              <div className="flex items-center justify-between bg-yellow-100 my-4">
                <label className="bg-blue-100 text-slate-800 font-semibold py-2.5">Especialidad</label>
                {selectedSpecialty && (
                  <div className="flex items-center space-x-2 rounded-lg">
                    <button onClick={() => setSelectedSpecialty("")} className="text-yellow-500 bg-slate-100 px-2 py-1 rounded-lg">
                      <span className="mr-2 text-sm font-semibold">{selectedSpecialty}</span>
                      <span className="text-xs">✕</span>
                    </button>
                  </div>
                )}
              </div>

              <input type="text" placeholder="Buscar especialidad..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="outline-none bg-slate-50 border-2 border-slate-200 text-slate-900 text-base rounded-lg focus:border-blue-500 block w-full p-2.5 mb-4" />

              <div className="scroll max-h-40 overflow-y-auto rounded-lg p-2">
                <div className={`p-2 flex items-center space-x-2 rounded-md cursor-pointer transition transition-200 ${ selectedSpecialty === "" ? "bg-yellow-100" : ""}`} onClick={() => setSelectedSpecialty("")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-cyan-600"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z" />
                    <path d="M12 8v4l2 2" />
                  </svg>
                  <span className="text-slate-600"></span>
                </div>
                {specialties
                  .filter((spec) =>
                    spec.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .length === 0 ? (
                  <p className="p-2 text-slate-500">No hay resultados</p>
                ) : (
                  specialties
                    .filter((spec) =>
                      spec.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((spec) => (
                      <div
                        key={spec.id}
                        className={`p-2 flex items-center space-x-2 cursor-pointer text-slate-600 transition transition-200 ${
                          selectedSpecialty === spec.name ? "bg-yellow-100" : ""
                        }`}
                        onClick={() => setSelectedSpecialty(spec.name)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5 text-cyan-600"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l2 2" />
                        </svg>
                        <span>{spec.name}</span>
                      </div>
                    ))
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button onClick={handleApplyFilters} className="cursor-pointer bg-green-500 hover:bg-green-600 text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition-all duration-200">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map(
          ({ id, prefix, name, image, specialties, categories, mp }) => (
            <div
              key={id}
              className="bg-white p-4 rounded-lg shadow-md border border-slate-200"
            >
              <section className="relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full aspect-square object-cover object-top rounded-t"
                />
                <span className="absolute bg-cyan-500 text-white px-4 py-1 rounded-md bottom-4 left-4">
                  {prefix}
                </span>
              </section>
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                <p className="text-cyan-500 font-semibold">MP: {mp}</p>
                <ul className="mt-4">
                  {specialties.map((specialty, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-slate-600 text-sm"
                    >
                      <span className="text-cyan-500">✔</span>
                      <span>{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

