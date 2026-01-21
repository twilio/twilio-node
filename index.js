const express = require("express");
const bodyParser = require("body-parser");
const { MessagingResponse } = require("twilio").twiml;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Estado en memoria (en producción usar Redis o DB)
let userStates = {};

app.post("/whatsapp", (req, res) => {
  const twiml = new MessagingResponse();
  const msg = req.body.Body.trim();
  const from = req.body.From;

  // Inicializar estado
  if (!userStates[from]) {
    userStates[from] = { step: 1 };
  }

  let reply = "";

  switch (userStates[from].step) {
    case 1: // Mensaje inicial
      reply = "Claro, bríndame número de proyecto para poder ayudarte";
      userStates[from].step = 2;
      break;

    case 2: // Usuario manda número de proyecto
      if (/^\d+$/.test(msg)) {
        reply =
          "A continuación, se muestra una lista de opciones: 👇\n\n" +
          "1️⃣ Sugerencia\n" +
          "2️⃣ Petición\n" +
          "3️⃣ Reclamo\n" +
          "4️⃣ Proporcionar otro número de proyecto\n" +
          "5️⃣ Terminar";
        userStates[from].step = 3;
      } else {
        reply = "Por favor ingresa un número de proyecto válido.";
      }
      break;

    case 3: // Opciones principales
      if (msg === "1") {
        reply =
          "Has seleccionado *Sugerencia* ✅\nPor favor describe tu sugerencia.";
        userStates[from].step = 4;
      } else if (msg === "2") {
        reply =
          "Has seleccionado *Petición* ✅\nPor favor describe tu petición.";
        userStates[from].step = 4;
      } else if (msg === "3") {
        reply =
          "Has seleccionado *Reclamo* ❗\nPor favor describe tu reclamo.";
        userStates[from].step = 4;
      } else if (msg === "4") {
        reply = "Claro, bríndame número de proyecto para poder ayudarte";
        userStates[from].step = 2;
      } else if (msg === "5") {
        reply =
          "¿Te fue funcional el manual?\n\n1️⃣ Sí\n2️⃣ No. Selecciona una opción en este menú.";
        userStates[from].step = 5;
      } else {
        reply =
          "Opción inválida. Elige un número del menú:\n1️⃣ Sugerencia\n2️⃣ Petición\n3️⃣ Reclamo\n4️⃣ Otro número de proyecto\n5️⃣ Terminar";
      }
      break;

    case 4: // Después de dar detalle en Sugerencia/Petición/Reclamo
      reply =
        "Gracias por tu mensaje 🙌\n\nElige una opción:\n" +
        "4️⃣ Proporcionar otro número de proyecto\n" +
        "5️⃣ Terminar";
      userStates[from].step = 3;
      break;

    case 5: // Evaluación final
      if (msg === "1") {
        reply = "¡Perfecto! Nos alegra haberte ayudado 😃. ¡Hasta luego!";
        delete userStates[from];
      } else if (msg === "2") {
        reply =
          "Entendido, vuelve a seleccionar una opción:\n" +
          "1️⃣ Sugerencia\n" +
          "2️⃣ Petición\n" +
          "3️⃣ Reclamo\n" +
          "4️⃣ Otro número de proyecto\n" +
          "5️⃣ Terminar";
        userStates[from].step = 3;
      } else {
        reply = "Por favor selecciona 1️⃣ Sí o 2️⃣ No.";
      }
      break;
  }

  twiml.message(reply);
  res.type("text/xml").send(twiml.toString());
});

app.listen(3000, () => {
  console.log("Chatbot WhatsApp corriendo en http://localhost:3000");
});
