export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-30"></div>

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-800">Are you sure?</p>
        <p className="mt-2 text-sm text-gray-600">
          Do you really want to delete this item? This action cannot be undone.
        </p>
        <div className="mt-4 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
