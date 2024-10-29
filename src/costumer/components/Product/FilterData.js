import { Label } from "@headlessui/react";

export const color = [
  "white",
  "Black",
  "Red",
  "Maroon",
  "Beige",
  "Pink",
  "Green",
  "Yellow",
];
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "XS", label: "XS" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "XXL", label: "XXL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "159 to 399" },
      { value: "399-999", label: "399 to 999" },
      { value: "999-1999", label: "999 to 1999" },
      { value: "1999-2999", label: "1999 to 2999" },
      { value: "2999-3999", label: "2999 to 3999" },
      { value: "3999-4999", label: "3999 to 4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10 & above" },
      { value: "20", label: "20 & above" },
      { value: "30", label: "30 & above" },
      { value: "40", label: "40 & above" },
      { value: "50", label: "50 & above" },
      { value: "60", label: "60 & above" },
      { value: "70", label: "70 & above" },
      { value: "80", label: "80 & above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out of Stock" },
    ],
  },
];
export const sortOptions = [
  {
    name: "Price: Low to High",
    query: "price_low",
    current: false,
  },
  { name: "Price: High to Low", query: "price_high", current: false },
];
