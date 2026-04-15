import productsData from './data/products.json'
import { mockups, prints } from './data/assets'
import { materials } from './data/materials'
import { techniques } from './data/techniques'
import { useLenis } from './hooks/useLenis'
import { FinalSection } from './components/FinalSection'
import { Grain } from './components/Grain'
import { HeroSection } from './components/HeroSection'
import { MaterialsSection } from './components/MaterialsSection'
import { ProductScene } from './components/ProductScene'
import { SectionDivider } from './components/SectionDivider'
import { StorySection } from './components/StorySection'
import { TechniquesSection } from './components/TechniquesSection'

const products = productsData.map((product) => ({
  ...product,
  mockup: mockups[product.mockupKey],
  print: prints[product.printKey],
}))

const heroProduct =
  products.find((product) => product.id === 'back-street-white-2') ?? products[0]

export default function App() {
  useLenis()

  return (
    <div className="relative min-h-screen overflow-hidden bg-obsidian text-white">
      <Grain />
      <div className="pointer-events-none fixed inset-0 bg-radial opacity-80" />

      <main className="relative z-10">
        <HeroSection product={heroProduct} />
        <StorySection />
        <SectionDivider label="Предложение по мерчу / 2026" />

        <section id="products" className="relative">
          {products.map((product, index) => (
            <ProductScene
              key={product.id}
              product={product}
              index={index}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </section>

        <SectionDivider label="Материалы" />
        <MaterialsSection items={materials} texture={products[2].print} />
        <SectionDivider label="Технологии нанесения" />
        <TechniquesSection items={techniques} products={products} />
        <FinalSection />
      </main>
    </div>
  )
}
