import React from "react";

const categories = [
  {
    id: 1,
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
  },
];

function Categories () {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
      <div className="flex flex-wrap justify-between gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative w-[23%] min-w-[200px] h-52 rounded-lg overflow-hidden shadow"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-bold">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
