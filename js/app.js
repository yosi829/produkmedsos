// ELEMENT
const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const addProductBtn = document.getElementById("addProductBtn");

const productList = document.getElementById("productList");

// CHECK LOGIN SAAT LOAD
if (localStorage.getItem("login") === "true") {
  showDashboard();
} else {
  showLogin();
}

// LOGIN
loginBtn.addEventListener("click", function () {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user !== "" && pass !== "") {
    localStorage.setItem("login", "true");
    showDashboard();
  } else {
    alert("Username dan password wajib diisi");
  }
});

// LOGOUT
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("login");
  showLogin();
});

// TAMPILAN
function showLogin() {
  loginPage.style.display = "flex";
  dashboardPage.style.display = "none";
}

function showDashboard() {
  loginPage.style.display = "none";
  dashboardPage.style.display = "block";
}

// PRODUK
addProductBtn.addEventListener("click", function () {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const desc = document.getElementById("productDesc").value;

  if (name === "" || price === "" || desc === "") {
    alert("Lengkapi data produk");
    return;
  }

  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <h4>${name}</h4>
    <p>${desc}</p>
    <strong>Rp ${price}</strong>
  `;

  productList.appendChild(card);

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productDesc").value = "";
});
