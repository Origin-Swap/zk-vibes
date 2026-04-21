import { useState } from 'react'
import TerminalBox from '../components/TerminalBox'

const allocations = [
  { label: 'Team & Advisors',  pct: 30, char: '█', color: 'text-terminal-red',   note: '1-month lock. Long-term alignment.' },
  { label: 'Ecosystem Fund',   pct: 25, char: '█', color: 'text-terminal-green', note: 'Purpose: TBD. Trust the process.' },
  { label: 'Public Sale',      pct: 20, char: '█', color: 'text-terminal-cyan',  note: 'Your chance. "Early" loosely defined.' },
  { label: 'Liquidity Pool',   pct: 15, char: '█', color: 'text-terminal-amber', note: 'Will be pulled if price drops.' },
  { label: 'Marketing',        pct: 7,  char: '█', color: 'text-purple-400',     note: 'KOL raids and Twitter spaces.' },
  { label: 'Reserve',          pct: 3,  char: '█', color: 'text-terminal-dim',   note: 'Team retreats. We call it OpEx.' },
]

const details = [
  { k: 'Token Name',    v: 'ZKV — ZK Vibes Token' },
  { k: 'Ticker',        v: '$ZKV' },
  { k: 'Total Supply',  v: '1,000,000,000 ZKV' },
  { k: 'Token Standard',v: 'ERC-20' },
  { k: 'Chain',         v: 'Base L2' },
  { k: 'Initial MCap',  v: '$12,000,000 (optimistic)' },
  { k: 'FDV',           v: '$1,000,000,000 (definitely)' },
  { k: 'Utility',       v: 'Governance (conceptually)' },
]

export default function Tokenomics() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="tokenomics" className="py-24 border-t border-terminal-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="text-xs text-terminal-dim font-mono mb-2">// SECTION_04</div>
          <div className="font-display text-5xl text-terminal-green text-glow mb-4">
            TOKENOMICS
          </div>
          <p className="font-mono text-sm text-terminal-white/60 max-w-xl">
            1,000,000,000 $ZKV. Carefully allocated with zero conflicts of interest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* ASCII bar chart */}
          <TerminalBox title="allocation_chart.sh --output ascii" variant="bright">
            <div className="font-mono text-xs space-y-3">
              <div className="text-terminal-dim mb-4">
                {'root@zkvibes:~$ ./tokenomics --visualize'}
              </div>
              {allocations.map(({ label, pct, color, note }, i) => (
                <div
                  key={label}
                  className="cursor-pointer group"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex justify-between mb-1">
                    <span className={`${color} group-hover:brightness-125`}>{label}</span>
                    <span className={`${color}`}>{pct}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`${color} text-lg leading-none`} style={{ letterSpacing: '-2px' }}>
                      {'█'.repeat(Math.round(pct / 2))}
                    </span>
                    <span className="text-terminal-dim/30 text-lg leading-none" style={{ letterSpacing: '-2px' }}>
                      {'░'.repeat(50 - Math.round(pct / 2))}
                    </span>
                  </div>
                  {hovered === i && (
                    <div className="text-terminal-dim italic text-xs mt-1">// {note}</div>
                  )}
                </div>
              ))}
            </div>
          </TerminalBox>

          {/* Token details */}
          <TerminalBox title="token_details.json" variant="default">
            <div className="font-mono text-xs">
              <div className="text-terminal-dim mb-3">{'root@zkvibes:~$ cat token_details.json'}</div>
              <div className="text-terminal-green/60 mb-1">{'{'}</div>
              {details.map(({ k, v }) => (
                <div key={k} className="pl-4 flex gap-2 py-0.5">
                  <span className="text-terminal-cyan">"{k}"</span>
                  <span className="text-terminal-dim">:</span>
                  <span className="text-terminal-amber">"{v}"</span>
                  <span className="text-terminal-dim">,</span>
                </div>
              ))}
              <div className="text-terminal-green/60 mt-1">{'}'}</div>
            </div>
          </TerminalBox>
        </div>

        {/* Vesting schedule */}
        <TerminalBox title="vesting_schedule.md" variant="amber">
          <div className="font-mono text-xs space-y-2">
            <div className="text-terminal-dim">{'root@zkvibes:~$ cat vesting.md'}</div>
            <div className="border-l-2 border-terminal-amber/40 pl-4 space-y-1 mt-2">
              <p className="text-terminal-amber">TEAM VESTING: 1-month cliff, 1-month linear vest.</p>
              <p className="text-terminal-white/60">Our lawyer recommended 4 years. We felt that was aggressive.</p>
              <p className="text-terminal-white/60">We are long-term oriented. 1 month IS long-term in crypto time.</p>
              <p className="text-terminal-dim italic">// "1 month in crypto = 4 years in traditional finance." — Our CFO (also the CEO)</p>
            </div>
          </div>
        </TerminalBox>
      </div>
    </section>
  )
}
