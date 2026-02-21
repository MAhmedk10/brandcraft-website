interface ProductStatsProps {
  stats: { value: string; label: string }[]
}

export function ProductStats({ stats }: ProductStatsProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
