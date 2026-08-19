import { useMemo, useState } from "react";

export function useFilter(products, initialSearch = "") {
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10);
  const [availability, setAvailability] = useState([]);
  const [sortBy, setSortBy] = useState("popularity");

  const toggleAvailability = (option) => {
    setAvailability((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        (category === "Organic" ? product.organic : product.category === category);

      const matchesPrice = product.price <= maxPrice;

      const matchesAvailability =
        availability.length === 0 ||
        availability.every((option) => {
          if (option === "In Stock") return product.inStock;
          return product.badge === option;
        });

      return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
    });

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "freshness":
          return a.daysAgo - b.daysAgo;
        default:
          return b.popularity - a.popularity;
      }
    });

    return result;
  }, [products, search, category, maxPrice, availability, sortBy]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    maxPrice,
    setMaxPrice,
    availability,
    toggleAvailability,
    sortBy,
    setSortBy,
    filtered,
  };
}
