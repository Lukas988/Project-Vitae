import { useState } from 'react';

export default function CustomSelect({ options, selectedOption, onSelect, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selected, setSelected] = useState(selectedOption || ''); // Estado para mostrar la selección

  // Filtra las opciones en función del término de búsqueda
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Maneja la selección de una opción
  const handleSelect = (option) => {
    setSelected(option); // Actualiza el estado con la opción seleccionada
    onSelect(option);
    setIsOpen(false);
    setSearchTerm(''); // Limpia la búsqueda
  };

  // Maneja el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Maneja la navegación con el teclado
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filteredOptions.length > 0) {
      handleSelect(filteredOptions[highlightedIndex]);
    }
  };

  return (
    <div className="relative">
      <div 
        className="w-full p-2 border border-gray-300 rounded-md cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || placeholder} {/* Muestra la selección o el placeholder */}
      </div>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
          <input
            type="text"
            className="w-full p-2 border-b border-gray-300 focus:outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar..."
            autoFocus
            onKeyDown={handleKeyDown}
          />

          {filteredOptions.length === 0 ? (
            <div className="p-2 text-gray-500">No se encontraron resultados</div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className={`p-2 cursor-pointer ${index === highlightedIndex ? 'bg-blue-500 text-white' : ''}`}
              >
                {option}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
