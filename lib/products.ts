export type Category = 'protein' | 'pre-workout' | 'fat-loss' | 'strength' | 'health' | 'recovery';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
}

export const CATEGORIES: { id: Category; label: string; tagline: string }[] = [
  { id: 'protein',     label: 'Protein',         tagline: 'Build. Recover. Repeat.' },
  { id: 'pre-workout', label: 'Pre-Workout',     tagline: 'Ignite every session.' },
  { id: 'fat-loss',    label: 'Fat Loss',        tagline: 'Lean. Clean. Dialled.' },
  { id: 'strength',    label: 'Creatine & Aminos', tagline: 'Power from within.' },
  { id: 'health',      label: 'Health & Vitals', tagline: 'Built to last.' },
  { id: 'recovery',    label: 'Recovery',        tagline: 'Perform. Rest. Repeat.' },
];

export const products: Product[] = [
  { id: 1,  name: 'NPB Whey Vanilla 980g',                       price: 669.99, category: 'protein',     image: 'whey-vanilla.jpg' },
  { id: 2,  name: 'NPB Whey Belgian Choc 980g',                  price: 669.99, category: 'protein',     image: 'whey-choc.jpg' },
  { id: 3,  name: 'NPB Whey Strawberry Cheesecake 980g',         price: 669.99, category: 'protein',     image: 'whey-strawberry.jpg' },
  { id: 4,  name: 'NPB Whey Hazelnut 980g',                      price: 669.99, category: 'protein',     image: 'whey-hazelnut.jpg' },
  { id: 5,  name: 'NPB Elevate Pre Workout Sour Candy 300g',     price: 369.99, category: 'pre-workout', image: 'pre-sour-candy.jpg' },
  { id: 6,  name: 'NPB Elevate Pre Workout Tangy Watermelon 300g', price: 369.99, category: 'pre-workout', image: 'pre-watermelon.jpg' },
  { id: 7,  name: 'NPB Elite EAA Peach Lemonade 300g',           price: 379.99, category: 'pre-workout', image: 'eaa-peach.jpg' },
  { id: 8,  name: 'NPB Elite EAA Watermelon 300g',               price: 379.99, category: 'pre-workout', image: 'eaa-watermelon.jpg' },
  { id: 9,  name: 'NPB L-Carnitine Tropical 480ml',              price: 289.99, category: 'fat-loss',    image: 'carnitine-tropical.jpg' },
  { id: 10, name: 'NPB L-Carnitine Sour Worms 480ml',            price: 289.99, category: 'fat-loss',    image: 'carnitine-sour.jpg' },
  { id: 11, name: 'NPB Fat Burner 120',                          price: 359.99, category: 'fat-loss',    image: 'fat-burner.jpg' },
  { id: 12, name: 'NPB Creatine Monohydrate 200g',               price: 259.99, category: 'strength',    image: 'creatine.jpg' },
  { id: 13, name: 'NPB L-Glutamine 200g',                        price: 259.99, category: 'strength',    image: 'glutamine.jpg' },
  { id: 14, name: 'NPB Vitamin C 60',                            price: 149.99, category: 'health',      image: 'vitamin-c.jpg' },
  { id: 15, name: 'NPB D3 + K2 30',                              price: 259.99, category: 'health',      image: 'd3-k2.jpg' },
  { id: 16, name: 'NPB Liver 60',                                price: 359.99, category: 'health',      image: 'liver.jpg' },
  { id: 17, name: 'NPB Heart 60',                                price: 369.99, category: 'health',      image: 'heart.jpg' },
  { id: 18, name: 'NPB Omega 3 90',                              price: 239.99, category: 'health',      image: 'omega3.jpg' },
  { id: 19, name: 'NPB Multivitamin 30',                         price: 279.99, category: 'health',      image: 'multivitamin.jpg' },
  { id: 20, name: 'NPB Magnesium 60',                            price: 369.99, category: 'health',      image: 'magnesium.jpg' },
  { id: 21, name: 'NPB Melatonin 30',                            price: 269.99, category: 'recovery',    image: 'melatonin.jpg' },
  { id: 22, name: 'NPB Ashwagandha 30',                          price: 249.99, category: 'recovery',    image: 'ashwagandha.jpg' },
];

export function priceFormat(p: number) {
  return \`R \${p.toFixed(2)}\`;
}
