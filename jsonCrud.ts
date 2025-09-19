interface User {
  id?: number;
  name: string;
  age: number;
}

const API_URL = "http://localhost:3000/users";

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm") as HTMLFormElement;
  const userIdInput = document.getElementById("userId") as HTMLInputElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;
  const tableBody = document.getElementById("userTableBody") as HTMLTableSectionElement;
  const alertBox = document.getElementById("alertBox") as HTMLElement;

  // Show bootstrap alert
  function showAlert(message: string, type: "success" | "danger" = "success") {
    alertBox.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
  }

  // Load all users (GET)
  async function loadUsers() {
    const res = await fetch(API_URL);
    const users: User[] = await res.json();
    renderTable(users);
  }

  // Render users into table
  function renderTable(users: User[]) {
    tableBody.innerHTML = "";
    users.forEach((user, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>
          <button class="btn btn-sm btn-warning me-2" data-action="edit" data-id="${user.id}">Edit</button>
          <button class="btn btn-sm btn-danger" data-action="delete" data-id="${user.id}">Delete</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Create or Update user (POST/PUT)
  userForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = userIdInput.value.trim();

    const user: User = {
      name: nameInput.value.trim(),
      age: Number(ageInput.value) || 0 // ensure number
    };

    try {
      if (id) {
        // PUT update
        user.id = Number(id);
        await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        });
        showAlert(`User "${user.name}" updated successfully!`, "success");
      } else {
        // POST create
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        });
        setTimeout(() => {
      showAlert(`User "${user.name}" created successfully!`, "success");
    }, 5000);
        
      }
    } catch (err) {
      console.error("Request failed:", err);
      showAlert("Error saving user.", "danger");
    }

    userForm.reset();
    userIdInput.value = "";
      loadUsers();
  });

  // Edit / Delete buttons
  tableBody.addEventListener("click", async (e) => {
    const target = e.target as HTMLElement;
    const id = target.getAttribute("data-id"); //13
    const action = target.getAttribute("data-action"); //edit

    if (!id || !action) return;

    if (action === "edit") {
      // GET single user
      const res = await fetch(`${API_URL}/${id}`);
      const user: User = await res.json();
      userIdInput.value = String(user.id ?? "");
      nameInput.value = user.name;
      ageInput.value = String(user.age);
    }

    if (action === "delete") {
      if (confirm("Delete this user?")) {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        showAlert("User deleted successfully!", "success");
        loadUsers();
      }
    }
  });

  // Initial load
      loadUsers();
});
