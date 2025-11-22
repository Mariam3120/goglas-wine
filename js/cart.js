// const cartContainer = document.getElementById("cart-items");
// const totalElement = document.getElementById("cart-total");

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function renderCart() {
//   cartContainer.innerHTML = "";   //არის ცარიელი(გასუფთავება)

//   if (cart.length === 0) {
//     cartContainer.innerHTML = "<p>კალათა ცარიელია 🛒</p>";
//     totalElement.textContent = "ჯამი: 0 ლ";
//     return;
//   }

//   let total = 0;

//   cart.forEach((item, index) => {
//     const itemDiv = document.createElement("div");
//     itemDiv.classList.add("cart-item");

//     itemDiv.innerHTML = `
//       <img src="${item.image}" alt="${item.name}" width="80">
//       <div>
//         <h3>${item.name}</h3>
//         <p>ფასი: ${item.price} ლ</p>
//         <p>რაოდენობა: ${item.quantity}</p>
//         <button class="remove-btn" data-index="${index}">წაშლა</button>
//       </div>
//     `;

//     cartContainer.appendChild(itemDiv); //ამ მომენტში ჩაიწერა html -ში :) მიუხედავად იმისა რომ 18ზე შევქმენი
//     total += item.price * item.quantity;
//   });

//   totalElement.textContent = `ჯამი: ${total.toFixed(2)} ლ`;

//   // წაშლის ღილაკის ფუნქცია
//   document.querySelectorAll(".remove-btn").forEach((btn) => {
//     btn.addEventListener("click", function () {
//       const index = this.dataset.index;
//       cart.splice(index, 1);  //ამ ინდექსიდან რამდენი ელემენტი წაშალოს, აქ 1 რომ ის კონკრეტული წაშალოს :)) 
//       localStorage.setItem("cart", JSON.stringify(cart));
//       renderCart();
//     });
//   });
// }

// renderCart();


//ენის ჩათვლით
const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

//  1. ენის ჩატვირთვის ფუნქცია
async function loadLangFile(lang) {
  try {
    const res = await fetch(`languages/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load languages/${lang}.json`);
    return await res.json();
  } catch (err) {
    console.error("Language load error:", err);
    return null;
  }
}

//  2.  მიმდინარე ენის მიღების ფუნქცია
async function getCurrentLangData() {
  const currentLang = localStorage.getItem("currentLang") || "geo";
  return await loadLangFile(currentLang);
}

//  3. renderCart ფუნქცია async-ად
async function renderCart() {
  const langData = await getCurrentLangData();
  
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p>${langData.cart_empty || "კალათა ცარიელია"} 🛒</p>`;
    totalElement.textContent = `${langData.cart_total || "ჯამი"}: 0 ${langData.currency || "ლ"}`;
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="80">
      <div>
        <h3>${item.name}</h3>
        <p>${langData.price || "ფასი"}: ${item.price} ${langData.currency || "ლ"}</p>
        <p>${langData.quantity || "რაოდენობა"}: ${item.quantity}</p>
        <button class="remove-btn" data-index="${index}">${langData.remove || "წაშლა"}</button>
      </div>
    `;

    cartContainer.appendChild(itemDiv);
    total += item.price * item.quantity;
  });

  totalElement.textContent = `${langData.cart_total || "ჯამი"}: ${total.toFixed(2)} ${langData.currency || "ლ"}`;

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = this.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

// 4. დავამატე ენის გადამრთველის ლოგიკა
document.addEventListener("DOMContentLoaded", () => {
  const langContainer = document.querySelector(".language");
  if (!langContainer) {
    renderCart(); // თუ ენის ღილაკები არ არის, მაინც დარენდერდეს კალათა
    return;
  }

  const langLinks = langContainer.querySelectorAll("a");
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  const currentLang = localStorage.getItem("currentLang") || "geo";

  async function setLanguage(lang) {
    const data = await loadLangFile(lang);
    if (!data) return;

    localStorage.setItem("currentLang", lang);

    // Header/Footer ტექსტების თარგმნა
    elementsToTranslate.forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (key && data[key]) el.textContent = data[key];
    });

    // Active კლასის განახლება
    langLinks.forEach((link) => {
      link.classList.toggle("active", link.id === lang);
    });

    // კალათის თავიდან რენდერი ახალ ენაზე
    await renderCart();
  }

  setLanguage(currentLang);

  // ენის ღილაკებზე კლიკი
  langLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setLanguage(link.id);
    });
  });
});