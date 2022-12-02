const searchInput = $(".data-search");

const renderAllEvents = async () => {
  const eventCTemplate = $(".data-event-template")[0];
  const eventCardContainer = $(".event-cards");

  const res = await fetch("http://localhost:3000/api/event", {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    }),
  });
  const data = res.json();
  console.log(data);
  localStorage.setItem("events", data);
  data.forEach((event, idx) => {
    const card = eventCTemplate.content.cloneNode(true).children[0];
    card.id = idx;
    eventCardContainer.append(card);
    $(`.event-row#${idx} .card-title`)[0].outerText = event.name;
    $(`.event-row#${idx} .card-text`)[0].outerText = event.ubication;
  });
};

renderAllEvents();

// searchInput.addEventListener("input", (e) => {
//   const value = e.target.value.toLowerCase();
//   const events = localStorage.getItem("events");
//   console.log(events);
//   events.forEach((event) => {
//     const isVisible = event.name.toLowerCase().includes(value);
//     event.element.classList.toggle("hide", !isVisible);
//   });
// });
