export const container = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  maxWidth: "250px",
};

export const userImage = {
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  objectFit: "cover",
};

export const userName = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#333",
};

export const button = {
  padding: "6px 12px",
  marginLeft: "10px",
  backgroundColor: "#4285F4",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export const modal = {
  background: "#fff",
  padding: "30px",
  borderRadius: "8px",
  width: "400px",
  margin: "100px auto",
  textAlign: "center",
};

export const logoutButton = {
  ...button,
  backgroundColor: "#DB4437",
};
