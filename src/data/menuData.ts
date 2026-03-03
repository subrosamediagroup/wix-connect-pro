export type MenuItem = { name: string; desc: string; price: string };

export const menuData: Record<string, MenuItem[]> = {
  "Build Your Own Pizza": [],
  "Specialty Pizzas": [
    { name: "White", desc: "White Sauce and Cheese. Available as Calzone.", price: "Sm $14.99 / Lg $18.99" },
    { name: "White Spinach", desc: "Feta Cheese. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Pastrami", desc: "Pickles and Mustard. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Rays Original", desc: "Onions, Tomato, Pickles, and hots topped with melted Provolone Cheese. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Buffalo Chicken", desc: "Buffalo and Ranch Drizzle. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Hawaiian", desc: "Red Sauce with Ham and Pineapple. Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Hot Hawaiian", desc: "Red Sauce with Extra Ham and Pineapple with Hot Cherry Relish. Available as Calzone.", price: "Sm $19.99 / Lg $23.99" },
    { name: "Steak & Cheese", desc: "Available as Calzone.", price: "Sm $17.99 / Lg $21.99" },
    { name: "Steak & Cheese Bomb", desc: "Available as Calzone.", price: "Sm $19.99 / Lg $23.99" },
  ],
  "Cold Submarines": [
    { name: "Ray's Original Italian", desc: "Provolone, Ham, Salami, Mortadella", price: "$12.99" },
    { name: "Ham & Cheese", desc: "Imported Ham and American Cheese", price: "$11.99" },
    { name: "Salami & Cheese", desc: "Genoa Salami and Provolone", price: "$11.99" },
    { name: "BLT Sub", desc: "Bacon, Lettuce, Tomato", price: "$11.99" },
    { name: "Roast Turkey Breast", desc: "Home Baked Turkey Breast and Provolone", price: "$11.99" },
    { name: "Chicken Salad", desc: "Home Made Chicken Salad, All White Meat", price: "$11.99" },
    { name: "Tuna Salad", desc: "Home Made Tuna Salad", price: "$11.99" },
    { name: "Roast Beef", desc: "", price: "$12.99" },
  ],
  "Hot Submarines": [
    { name: "Pastrami and Cheese", desc: "Thin Sliced Grilled with Yellow Mustard, Pickles, and Provolone", price: "$12.99" },
    { name: "Italian Meatball Parm", desc: "In-House Made Meatballs with Marinara and Provolone", price: "$12.99" },
    { name: "Italian Sausage Parm", desc: "In-House Made Sausage with Marinara and Provolone", price: "$12.99" },
    { name: "Italian Sausage", desc: "Grilled Sweet Sausage with Peppers and Onions", price: "$12.99" },
    { name: "Pepper Egg and Cheese", desc: "Pepper Egg Omelette Style with Provolone and Bead of Marinara", price: "$12.99" },
    { name: "Sirloin Tip Kabob", desc: "Our Own House Marinate Sirloin Tips Grilled with Peppers and Onions", price: "$12.99" },
    { name: "Chicken Tender Parm", desc: "In-House Made Breast Meat Tenders", price: "$12.99" },
    { name: "Cheeseburger Sub", desc: "", price: "$12.99" },
    { name: "French Dip", desc: "", price: "$13.99" },
    { name: "Steak & Cheese", desc: "Steak with Grilled Peppers, Onions, Mushrooms, and Provolone Cheese", price: "$12.99" },
    { name: "Steak & Cheese Bomb", desc: "Steak with Grilled Peppers, Onions, Mushrooms, Salami, and Provolone Cheese", price: "$13.99" },
  ],
  Calzones: [
    { name: "Ray's Original Italian", desc: "", price: "$16.99" },
    { name: "Coldcut Calzone", desc: "Salami, Mortadella, Ham", price: "$17.99" },
    { name: "Steak & Cheese", desc: "", price: "$17.99" },
    { name: "Veggie", desc: "Pepper, Onion, Tomato, and Mushroom", price: "$17.99" },
    { name: "Pastrami", desc: "", price: "$17.99" },
    { name: "Meatball Parm", desc: "", price: "$17.99" },
    { name: "Sausage", desc: "Pepper and Onion", price: "$17.99" },
    { name: "Steak Bomb", desc: "Salami, Pepper, Onion, and Mushroom", price: "$20.99" },
  ],
  "Roast Beef": [
    { name: "Super Beef", desc: "Rare Roast Beef on a Grilled Onion Roll, Piled Extra High", price: "$11.99" },
    { name: "Regular Beef", desc: "Rare Roast Beef on a Grilled Burger Roll", price: "$9.99" },
    { name: "Junior Beef", desc: "Rare Roast Beef on a Grilled Burger Roll", price: "$7.99" },
  ],
  Burgers: [
    { name: "Hamburger", desc: "", price: "$5.99" },
    { name: "Cheeseburger", desc: "Cheese: Provolone, American, Swiss, Mozzarella", price: "$6.99" },
  ],
  "Ray's FC Tenders": [
    { name: "4 Ct", desc: "Original or Grilled with Choice of Sauce", price: "$8.99" },
    { name: "6 Ct", desc: "Original or Grilled with Choice of Sauce", price: "$13.99" },
    { name: "8 Ct", desc: "Original or Grilled with Choice of Sauce", price: "$17.99" },
    { name: "12 Ct", desc: "Original or Grilled with Choice of Sauce", price: "$25.99" },
  ],
  Sides: [
    { name: "French Fries", desc: "", price: "Sm $3.99 / Lg $5.99" },
    { name: "Onion Rings", desc: "", price: "Sm $4.99 / Lg $6.99" },
    { name: "Fried Mushrooms", desc: "", price: "$8.50" },
    { name: "Meatballs - 4 ct.", desc: "Sauce and Cheese", price: "$8.99" },
    { name: "Sausage Balls - 4 ct.", desc: "Sauce and Cheese", price: "$8.99" },
    { name: "Garlic Knots - 9 ct.", desc: "Cheese and A Side of Marinara", price: "$8.99" },
  ],
  Salads: [
    { name: "Garden Salad", desc: "Iceberg and romaine, tomato, and other seasonal vegetables served with pita", price: "$7.99" },
    { name: "Greek Salad", desc: "Pepperoncini, feta cheese, and kalamata olives. Iceberg and romaine, tomato, and other seasonal vegetables served with pita", price: "$8.99" },
    { name: "Chef Salad", desc: "Rolled ham, mortadella, salami, provolone. Iceberg and romaine, tomato, and other seasonal vegetables served with pita", price: "$9.50" },
  ],
  "Kids Menu": [
    { name: "Kids Chicken Tenders", desc: "In-House Made Breast Meat Tenders, 2 Pieces with Side of Sauce", price: "$5.99" },
    { name: "Kids Roast Beef", desc: "In-House Made Roast Beef on a Small Burger Roll", price: "$5.99" },
    { name: "Kids Cheeseburger", desc: "", price: "$5.99" },
  ],
  Drinks: [
    { name: "Coca-Cola Products", desc: "", price: "$3.00" },
    { name: "Domestic Beer", desc: "", price: "$4.00" },
    { name: "Imported Beer", desc: "", price: "$4.75" },
    { name: "Hard Teas, Seltzers, Lemonade", desc: "", price: "$5.25" },
    { name: "Wine", desc: "", price: "$6.00" },
    { name: "Iced and Hot Coffee", desc: "", price: "$2.25" },
  ],
};

/** Extract the first dollar amount from a price string */
export function parsePrice(priceStr: string): number {
  const match = priceStr.match(/\$(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 0;
}

/** Check if an item has small/large pricing and return both prices */
export function parseSizes(priceStr: string): { small: number; large: number } | null {
  const match = priceStr.match(/Sm\s*\$(\d+\.?\d*)\s*\/\s*Lg\s*\$(\d+\.?\d*)/);
  if (!match) return null;
  return { small: parseFloat(match[1]), large: parseFloat(match[2]) };
}
