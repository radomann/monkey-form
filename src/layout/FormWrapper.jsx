export function FormWrapper({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <div
        style={{
          display: children.length ? "grid" : "flex",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
