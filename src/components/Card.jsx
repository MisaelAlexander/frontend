import { Archive, File as FileIcon } from 'lucide-react';

const PackageCard = ({ paquete }) => {
  return (
    <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-6 flex flex-col">
      <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-2">
        {paquete.customerName}
      </h3>

      <div className="flex flex-col gap-5 mb-8 flex-1">
        <div className="flex items-center gap-4">
          <div className="bg-gray-50 w-11 h-11 rounded-xl flex items-center justify-center">
            <Archive className="text-gray-400" size={22} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-400 font-montserrat font-bold uppercase tracking-wide">
              Piezas
            </span>
            <span className="text-sm font-montserrat font-medium text-gray-700">
              {paquete.cantPieces}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-gray-50 w-11 h-11 rounded-xl flex items-center justify-center">
            <FileIcon className="text-gray-400" size={22} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-400 font-montserrat font-bold uppercase tracking-wide">
              Fecha del evento
            </span>
            <span className="text-sm font-montserrat font-medium text-gray-700">
              {paquete.eventDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;