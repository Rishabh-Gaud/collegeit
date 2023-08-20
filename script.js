const flightsData = [
  {
    from: "Chennai",
    to: "Delhi",
    departure: "5:00 PM",
    arrival: "7:40 PM",
    duration: "2 Hours 40 mins",
    airline: "Jet Airways",
    seatsAvailable: 1,
    price: 6900,
  },
  {
    from: "Kolkata",
    to: "Bangalore",
    departure: "9:40 PM",
    arrival: "12:10 AM",
    duration: "2 Hours 30 mins",
    airline: "Air India",
    seatsAvailable: 1,
    price: 7500,
  },
  {
    from: "Bangalore",
    to: "Kolkata",
    departure: "7:00 AM",
    arrival: "9:30 AM",
    duration: "2 Hours 30 mins",
    airline: "Jet Airways",
    seatsAvailable: 2,
    price: 4000,
  },
  {
    from: "Delhi",
    to: "Chennai",
    departure: "12:30 PM",
    arrival: "3:20 PM",
    duration: "2 Hours 50 Mins",
    airline: "Air India",
    seatsAvailable: 3,
    price: 9000,
  },
  {
    from: "Bangalore",
    to: "Kolkata",
    departure: "5:00 PM",
    arrival: "7:00 PM",
    duration: "2 Hours",
    airline: "Air India",
    seatsAvailable: 3,
    price: 10000,
  },
  {
    from: "Kolkata",
    to: "Bangalore",
    departure: "9:30 PM",
    arrival: "12:10 AM",
    duration: "2 Hours 40 mins",
    airline: "Jet Airways",
    seatsAvailable: 3,
    price: 6300,
  },
  {
    from: "Bangalore",
    to: "Kolkata",
    departure: "6:00 PM",
    arrival: "8:00 PM",
    duration: "2 Hours",
    airline: "Indigo",
    seatsAvailable: 5,
    price: 6000,
  },
  {
    from: "Delhi",
    to: "Chennai",
    departure: "3:00 AM",
    arrival: "6:00 AM",
    duration: "3 Hours",
    airline: "Air India",
    seatsAvailable: 7,
    price: 8000,
  },
  {
    from: "Chennai",
    to: "Delhi",
    departure: "2:00 AM",
    arrival: "5:00 AM",
    duration: "3 hours",
    airline: "Air India",
    seatsAvailable: 10,
    price: 7000,
  },
  {
    from: "Kolkata",
    to: "Bangalore",
    departure: "5:50 AM",
    arrival: "7:50 AM",
    duration: "2 Hours",
    airline: "Air India",
    seatsAvailable: 12,
    price: 5699,
  },
  {
    from: "Delhi",
    to: "Chennai",
    departure: "12:20 PM",
    arrival: "3:20 PM",
    duration: "3 Hours",
    airline: "Air India",
    seatsAvailable: 12,
    price: 9000,
  },
  {
    from: "Bangalore",
    to: "Kolkata",
    departure: "3:00 AM",
    arrival: "5:00 AM",
    duration: "2 Hours",
    airline: "Indigo",
    seatsAvailable: 21,
    price: 6500,
  },
  {
    from: "Kolkata",
    to: "Bangalore",
    departure: "5:50 AM",
    arrival: "8:00 AM",
    duration: "2 Hours 10 mins",
    airline: "Indigo",
    seatsAvailable: 21,
    price: 5700,
  },
  {
    from: "Chennai",
    to: "Delhi",
    departure: "4:50 PM",
    arrival: "7:00 PM",
    duration: "2 Hours 10 mins",
    airline: "Air India",
    seatsAvailable: 24,
    price: 5750,
  },
  {
    from: "Delhi",
    to: "Chennai",
    departure: "3:00 AM",
    arrival: "6:00 AM",
    duration: "3 Hours",
    airline: "Indigo",
    seatsAvailable: 25,
    price: 7999,
  },
  {
    from: "Chennai",
    to: "Delhi",
    departure: "5:00 AM",
    arrival: "8:00 AM",
    duration: "3 Hours",
    airline: "Air India",
    seatsAvailable: 26,
    price: 8000,
  },
  {
    from: "Bangalore",
    to: "Kolkata",
    departure: "6:00 PM",
    arrival: "9:00 PM",
    duration: "3 Hours",
    airline: "Air India",
    seatsAvailable: 27,
    price: 5000,
  },
  {
    from: "Delhi",
    to: "Chennai",
    departure: "3:00 AM",
    arrival: "6:05 AM",
    duration: "3 Hours 5 mins",
    airline: "Jet Airways",
    seatsAvailable: 29,
    price: 7500,
  },
  {
    from: "Kolkata",
    to: "Bangalore",
    departure: "2:30 AM",
    arrival: "4:50 AM",
    duration: "2 Hours 20 mins",
    airline: "Air India",
    seatsAvailable: 36,
    price: 4500,
  },
  {
    from: "Chennai",
    to: "Delhi",
    departure: "5:00 PM",
    arrival: "7:50 PM",
    duration: "2 Hours 50 mins",
    airline: "Indigo",
    seatsAvailable: 56,
    price: 4800,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");
  const submitBtn = document.getElementById("submitBtn");

  const sortKeySelect = document.getElementById("sortKey");
  const sortOrderSelect = document.getElementById("sortOrder");
  const applySortBtn = document.getElementById("applySort");

  submitBtn.addEventListener("click", function () {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const numSeats = parseInt(document.getElementById("numSeats").value, 10);
    showScreen2WithDetails(source, destination, numSeats);
  });

  function showScreen2WithDetails(source, destination, numSeats) {
    screen1.style.display = "none";
    screen2.style.display = "block";

    const flightsTable = createFlightsTable(source, destination, numSeats);
    screen2.appendChild(flightsTable);
  }

  function createFlightsTable(source, destination, numSeats) {
    const table = document.createElement("table");
    table.classList.add("flight-table");

    const headerRow = table.insertRow();
    for (const key in flightsData[0]) {
      if (key !== "seatsAvailable") {
        const th = document.createElement("th");
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        headerRow.appendChild(th);
      }
    }
    const sortedFlights = getSortedFlights(source, destination, numSeats);
    for (const flight of sortedFlights) {
      const row = table.insertRow();
      for (const key in flight) {
        if (key !== "seatsAvailable") {
          const cell = row.insertCell();
          cell.textContent = flight[key];
        }
      }
    }
    return table;
  }
  function getSortedFlights(source, destination, numSeats) {
    const filteredFlights = flightsData.filter(
      (flight) =>
        flight.from.toLowerCase() === source.toLowerCase() &&
        flight.to.toLowerCase() === destination.toLowerCase() &&
        flight.seatsAvailable >= numSeats,
    );

    const sortKey = sortKeySelect.value; 
    const sortOrder = sortOrderSelect.value;

    const sortedFlights = sortFlights(filteredFlights, sortKey, sortOrder);
    return sortedFlights;
  }

  function sortFlights(flights, key, order) {
    return flights.slice().sort((a, b) => {
      if (key === "price" || key === "duration") {
        const aValue = key === "duration" ? parseDuration(a[key]) : a[key];
        const bValue = key === "duration" ? parseDuration(b[key]) : b[key];
        return order === "asc" ? aValue - bValue : bValue - aValue;
      }
    });
  }

  function parseDuration(durationString) {
    const [hours, minutes] = durationString
      .split(" ")[0]
      .split("Hours")[0]
      .split("Hour")[0]
      .split("mins")[0]
      .split("min")[0]
      .split(" ");
    return parseInt(hours) * 60 + parseInt(minutes);
  }

  // Apply Sort button click event handler
  applySortBtn.addEventListener("click", function () {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const numSeats = parseInt(document.getElementById("numSeats").value, 10);

    const existingTable = screen2.querySelector(".flight-table");
  if (existingTable) {
    screen2.removeChild(existingTable);
  }

    const flightsTable = createFlightsTable(source, destination, numSeats);
    screen2.appendChild(flightsTable);
  });
});
