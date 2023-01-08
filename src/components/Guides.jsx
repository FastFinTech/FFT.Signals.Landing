import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/fortraders',
    name: 'Traders',
    description: 'Learn how to trade your own accounts using signals from Trade Signal Server.',
  },
  {
    href: '/forsignalcreators',
    name: 'Signal Creators',
    description: 'Understand how to create signals.',
  },
  {
    href: '/forstrategists',
    name: 'Strategists',
    description:
      'Learn how to trade like a boss.',
  },
  {
    href: '/fortraderoomleaders',
    name: 'Trade Room Leaders',
    description:
      'Magically lift your trade room results and cut traders\' work by magnitudes.',
  },
  {
    href: '/forinvestors',
    name: 'Investors',
    description:
      'Get your own features implemented.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
