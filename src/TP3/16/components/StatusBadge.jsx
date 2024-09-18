export default function StatusBadge({ status }) {
  const badgeStyle = {
    ativo: {
      backgroundColor: "green",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
    },
    inativo: {
      backgroundColor: "gray",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
    },
    pendente: {
      backgroundColor: "orange",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
    },
  };
  return (
    <div className="badge">
      <span style={badgeStyle[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
}
