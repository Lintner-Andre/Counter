let total = 0;

function addItemToOrder(name, price) {
  total = total + price;
  console.log(price, total, name);
  console.log("Der gesamtpreis liegt bei " + total + "€");

  renderTotalValue();

  const ordersItemsElement = document.getElementById("orders-items");
  ordersItemsElement.innerHTML =
    ordersItemsElement.innerHTML + `<p>${name}:${price}€</p>`;
}

function renderTotalValue() {
  const totalValueElement = document.getElementById("total-value");
  totalValueElement.innerHTML = total + "€";
}

function reset() {
  total = 0;
  const ordersItemsElement = document.getElementById("orders-items");
  ordersItemsElement.innerHTML = "";
  renderTotalValue();
}

function checkoutInHouse() {
  alert(`Bestellung in Höhe von ${total}€ für vor ort aufgegeben`);
  reset();
}

function checkoutDelivery() {
  if (total < 20) {
    alert("der Mindestbestellwert für Lieferung beträgt 20€");
  } else {
    addItemToOrder("Liefergebühr", 2.5);
    alert(`Bestellung in Höhe von ${total}€ für Lieferung aufgegeben`);
    reset();
  }
}
