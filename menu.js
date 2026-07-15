// Menu data for Triple Bean Cafe.
// Add or remove a drink by editing this array — index.html renders the
// menu sections/cards from it on load. No markup changes needed.
//
// Fields:
//   id           unique slug (not currently used in markup, reserved for future use)
//   name         canonical item name — used for data-item/data-qty and the order payload
//   displayName  optional display override (falls back to name)
//   category     "Coffee" | "Tea" | "Misc" — also controls section grouping/order
//   icon         path to the item's SVG icon
//   defaultTemp  "iced" | "hot" | null — drives the ❄️/🔥 badge
//   description  optional extra meta text (orderable items get " • Tap to add" appended)
//   orderable    whether the card has +/- qty controls and counts toward an order

const MENU_ITEMS = [
  // Coffee
  { id: "iced-black", name: "Iced Black", category: "Coffee", icon: "images/iced-black.svg", defaultTemp: "iced", orderable: true },
  { id: "hot-black", name: "Hot Black", category: "Coffee", icon: "images/hot-black.svg", defaultTemp: "hot", orderable: true },
  { id: "iced-white", name: "Iced White", category: "Coffee", icon: "images/iced-white.svg", defaultTemp: "iced", orderable: true },
  { id: "hot-white", name: "Hot White", category: "Coffee", icon: "images/hot-white.svg", defaultTemp: "hot", orderable: true },
  { id: "aerocano", name: "Aerocano", category: "Coffee", icon: "images/aerocano.svg", defaultTemp: "iced", description: "Aerated espresso on ice", orderable: true },
  { id: "affogato", name: "Affogato", category: "Coffee", icon: "images/affogato.svg", defaultTemp: "iced", description: "Vanilla ice cream + double espresso", orderable: true },

  // Tea
  { id: "iced-matcha", name: "Iced Matcha Latte", category: "Tea", icon: "images/iced-matcha.svg", defaultTemp: "iced", orderable: true },
  { id: "hot-matcha", name: "Hot Matcha Latte", category: "Tea", icon: "images/hot-matcha.svg", defaultTemp: "hot", orderable: true },
  { id: "matcha-ichigo", name: "Iced Strawberry Matcha Latte", displayName: "Matcha Ichigo", category: "Tea", icon: "images/strawberry-matcha.svg", defaultTemp: "iced", description: "Strawberry puree + matcha + milk", orderable: true },

  // Misc
  { id: "fridge", name: "Assorted Drinks in Fridge", category: "Misc", icon: "images/fridge.svg", defaultTemp: null, description: "Self-serve — help yourself from the fridge", orderable: false },
  { id: "gin-tonic", name: "Gin & Tonic", category: "Misc", icon: "images/gin-tonic.svg", defaultTemp: "iced", orderable: true },
];
