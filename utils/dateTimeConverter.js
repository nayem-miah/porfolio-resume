export default function formatDateTime(isoDate) {
  const dateObj = new Date(isoDate);

  // Format date as DD-MM-YYYY
  const date = `${String(dateObj.getDate()).padStart(2, "0")}-${String(
    dateObj.getMonth() + 1
  ).padStart(2, "0")}-${dateObj.getFullYear()}`;

  return `${date}`;
}
// Example usage
const isoDate = "2024-12-01T16:29:26.454+00:00";
console.log(formatDateTime(isoDate)); // Outputs: 01-12-2024 16:29:26
