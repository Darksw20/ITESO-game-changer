eventCTemplate = document.querySelector("[data-event-template]");
eventCardContainer = document.querySelector("[data-event-cards-container]");
searchInput = document.querySelector("[data-search]");

console.log(eventCTemplate, eventCardContainer, searchInput);

let events = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  console.log(events);
  events.forEach((event) => {
    const isVisible = event.title.toLowerCase().includes(value);
    event.element.classList.toggle("hide", !isVisible);
  });
});

fetch("http://localhost:3000/api/event")
  .then((res) => res.json())
  .then(({ data }) => {
    console.log(data);
    events = data.map((event, idx) => {
      const card = eventCTemplate.content.cloneNode(true).children[0];
      const title = card.querySelector("[data-title]");
      const text = card.querySelector("[data-text]");
      title.textContent = event.title;
      text.textContent = event.text;
      console.log(idx, card);
      card.id = idx;
      eventCardContainer.append(card);
      $(`.event-row#${idx} .card-title`)[0].outerText = event.name;
      $(`.event-row#${idx} .card-text`)[0].outerText = event.ubication;
      return { title: event.title, text: event.text, element: card };
    });
  });
