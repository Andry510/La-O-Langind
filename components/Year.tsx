// Año del pie de página. Se resuelve al generar la página (requisito de Cache Components para usar Date).
export async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
