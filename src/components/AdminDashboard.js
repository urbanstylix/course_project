import React from "react";

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>
      <p>Welcome! You are logged in.</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default AdminDashboard;
