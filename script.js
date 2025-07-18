// Inicjalizacja AOS i Feather Icons
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, once: true });
  feather.replace();

  // Slider data & refs
  const data = [
    { title: "Usługa 1", text: "Rozbudowany opis usługi nr 1, pokazujący wszystkie zalety." },
    { title: "Usługa 2", text: "Rozbudowany opis usługi nr 2, pokazujący wszystkie zalety." },
    { title: "Usługa 3", text: "Rozbudowany opis usługi nr 3, pokazujący wszystkie zalety." },
    { title: "Usługa 4", text: "Rozbudowany opis usługi nr 4, pokazujący wszystkie zalety." }
  ];
  const wrapper = document.getElementById("oferta-slides");
  const visible = 2, total = data.length;
  let index = visible, busy = false;

  function makeSlide(item) {
    const outer = document.createElement("div");
    outer.className = "flex-shrink-0 w-1/2 px-3 cursor-pointer";
    outer.setAttribute("data-aos", "fade-up");
    outer.innerHTML = `
      <div class="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#FBBE18] hover:shadow-xl tilt-hover transition">
        <h3 class="text-3xl font-semibold text-[#FBBE18] mb-4">${item.title}</h3>
        <p class="text-lg text-gray-700">${item.text}</p>
      </div>`;
    outer.addEventListener("click", () => openModal(item));
    return outer;
  }

  // Loop slides
  data.slice(-visible).forEach(i => wrapper.appendChild(makeSlide(i)));
  data.forEach(i => wrapper.appendChild(makeSlide(i)));
  data.slice(0, visible).forEach(i => wrapper.appendChild(makeSlide(i)));
  wrapper.style.transform = `translateX(-${(100/visible)*index}%)`;

  // Navigation
  document.getElementById("prevBtn").onclick = () => slideTo(index - 1);
  document.getElementById("nextBtn").onclick = () => slideTo(index + 1);

  function slideTo(newIndex) {
    if (busy) return;
    index = newIndex;
    wrapper.style.transition = "transform 2s linear";
    wrapper.style.transform = `translateX(-${(100/visible)*index}%)`;
  }

  wrapper.addEventListener("transitionend", e => {
    if (e.propertyName !== "transform") return;
    busy = true;
    wrapper.style.transition = "none";
    if (index < visible) index += total;
    else if (index >= total + visible) index -= total;
    wrapper.style.transform = `translateX(-${(100/visible)*index}%)`;
    setTimeout(() => {
      wrapper.style.transition = "transform 2s linear";
      busy = false;
    }, 20);
  });

  setInterval(() => slideTo(index + 1), 5000);

  // Modal
  const modal = document.getElementById("ofertaModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const modalClose = document.getElementById("modalClose");

  function openModal(item) {
    modalTitle.textContent = item.title;
    modalText.textContent = item.text;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
  modalClose.addEventListener("click", () => modal.classList.replace("flex","hidden"));
  modal.addEventListener("click", e => { if (e.target===modal) modal.classList.replace("flex","hidden"); });

  // Chat
  const toggleBtn = document.getElementById('chatToggle');
  const chatBox = document.getElementById('chatBox');
  const closeBtn = document.getElementById('chatClose');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  setTimeout(() => {
    toggleBtn.classList.add('ping-once');
    chatBox.classList.remove('hidden');
  }, 3000);
  toggleBtn.addEventListener('click', () => chatBox.classList.toggle('hidden'));
  closeBtn.addEventListener('click', () => chatBox.classList.add('hidden'));
  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = chatInput.value.trim();
    if (!msg) return;
    const userBubble = document.createElement('div');
    userBubble.className = 'bg-blue-100 p-2 rounded-xl self-end max-w-[70%] text-right ml-auto';
    userBubble.textContent = msg;
    chatMessages.appendChild(userBubble);
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    setTimeout(() => {
      const botBubble = document.createElement('div');
      botBubble.className = 'bg-gray-100 p-2 rounded-xl self-start max-w-[70%] mr-auto';
      botBubble.textContent = "Dziękujemy! Odezwiemy się wkrótce.";
      chatMessages.appendChild(botBubble);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  });
});
