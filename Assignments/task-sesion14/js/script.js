
const LS_KEY = "users";
    let users = [];

    document.addEventListener("DOMContentLoaded", () => {
      loadUsers();
      renderTable();
    });

    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!name || !email || !password) {
        alert("من فضلك املأ كل الحقول");
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      saveUsers();
      renderTable();

      document.getElementById("loginForm").reset();
    });

    // زرار Reset
    document.getElementById("resetBtn").addEventListener("click", function () {
      if (confirm("هل أنت متأكد أنك تريد مسح كل البيانات؟")) {
        users = [];
        localStorage.removeItem(LS_KEY);
        renderTable();
      }
    });

    function saveUsers() {
      localStorage.setItem(LS_KEY, JSON.stringify(users));
    }

    function loadUsers() {
      try {
        const data = localStorage.getItem(LS_KEY);
        users = data ? JSON.parse(data) : [];
        if (!Array.isArray(users)) users = [];
      } catch {
        users = [];
      }
    }

    function renderTable() {
      const tbody = document.getElementById("usersBody");
      tbody.innerHTML = "";
      users.forEach((u) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td>${u.password}</td>
        `;
        tbody.appendChild(tr);
      });
    }
