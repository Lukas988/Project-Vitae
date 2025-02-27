
import React, { useState } from 'react';

const Specialist = ({ doctorsList, specialtiesList }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  // Ordena los doctores una vez y mantiene la lista en el estado
  const [sortedSpecialist, setSortedSpecialist] = useState(() =>
    [...doctorsList].sort((a, b) => a.name.localeCompare(b.name))
  );

  // Cambia el orden de la lista sin crear una nueva copia cada vez
  const handleSortOrderChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    setSortedSpecialist((prevList) =>
      [...prevList].sort((a, b) =>
        order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      )
    );
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  return (
    <>
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <div>
          <label htmlFor="sortOrder" className="mr-2">Ordenar por:</label>
          <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange} className="p-2 border rounded">
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div>
          <label htmlFor="specialty" className="mr-2">Especialidad:</label>
          <select id="specialty" value={selectedSpecialty} onChange={handleSpecialtyChange} className="p-2 border rounded">
            <option value="">Todas</option>
            {specialtiesList.map(({ id, name }) => (
              <option key={id} value={name}>{name}</option>
            ))}
          </select>
        </div>
      </div>

      {sortedSpecialist.map(({ id, prefix, name, image, specialties, categories, mp }) => (
        <div key={id} className={`bg-white p-4 rounded border border-gray-200 size-full ${selectedSpecialty && !categories.includes(selectedSpecialty) ? 'hidden' : ''}`}>
          <img src={image} alt={name} className="w-full aspect-square object-cover object-top rounded-t" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{prefix} {name}</h3>
            <p className="text-gray-600">MP: {mp}</p>
            <ul className="mt-2">
              {specialties.map((specialty, index) => (
                <li key={index} className="text-gray-800">{specialty}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Specialist;