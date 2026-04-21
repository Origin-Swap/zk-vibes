import TerminalBox from '../components/TerminalBox'
import { CheckSquare, Square, Clock } from 'lucide-react'

const phases = [
  {
    id: 'PHASE_01',
    title: 'INCEPTION // Q1 2024',
    status: 'done',
    variant: 'default',
    items: [
      { done: true,  text: 'Name the project something with "ZK" in it' },
      { done: true,  text: 'Register zkvibes.xyz (zkvibes.com was taken)' },
      { done: true,  text: 'Write whitepaper (47 pages, 1 page of actual content)' },
      { done: true,  text: 'Tweet "ZK changes everything 🧵"' },
      { done: true,  text: 'Deploy Hello World Circom circuit to testnet' },
    ],
  },
  {
    id: 'PHASE_02',
    title: 'FUNDRAISING // Q2 2024',
    status: 'done',
    variant: 'default',
    items: [
      { done: true,  text: 'Raise $2.1M from anonymous VC (they liked the meme)' },
      { done: true,  text: 'Announce "partnership" with 5 other pre-product protocols' },
      { done: true,  text: 'Attend ETHDenver, ETHcc, Token2049, Devcon, EthCC (again)' },
      { done: true,  text: 'Hire "ZK Research Lead" (reads papers, writes threads)' },
      { done: true,  text: 'Rebrand logo 3 times' },
    ],
  },
  {
    id: 'PHASE_03',
    title: 'TESTNET // Q3-Q4 2024',
    status: 'active',
    variant: 'bright',
    items: [
      { done: true,  text: 'Deploy testnet (localhost + ngrok tunnel)' },
      { done: true,  text: 'Conduct internal security audit (passed)' },
      { done: false, text: 'External audit by credible firm (emailed them)' },
      { done: false, text: 'zkEVM integration (roadmap item, no ETA)' },
      { done: false, text: 'SDK for developers (README.md exists)' },
    ],
  },
  {
    id: 'PHASE_04',
    title: 'MAINNET // Q1 2025',
    status: 'upcoming',
    variant: 'default',
    items: [
      { done: false, text: 'Mainnet launch (Twitter thread drafted)' },
      { done: false, text: 'Token Generation Event (TGE date: "soon")' },
      { done: false, text: 'DEX listing on Uniswap v3' },
      { done: false, text: 'Mobile SDK (no scope defined)' },
      { done: false, text: 'Enterprise partnerships (cold emailing Fortune 500)' },
    ],
  },
]

const statusLabel = {
  done:     { label: '[COMPLETE]',    color: 'text-terminal-green' },
  active:   { label: '[IN PROGRESS]', color: 'text-terminal-amber' },
  upcoming: { label: '[PLANNED]',     color: 'text-terminal-dim'   },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 border-t border-terminal-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="text-xs text-terminal-dim font-mono mb-2">// SECTION_05</div>
          <div className="font-display text-5xl text-terminal-green text-glow mb-4">
            ROADMAP.MD
          </div>
          <p className="font-mono text-sm text-terminal-white/60 max-w-xl">
            A living document. Items can be moved to the next phase indefinitely.
            We call this "agile."
          </p>
        </div>

        <div className="space-y-4">
          {phases.map(({ id, title, status, variant, items }) => {
            const st = statusLabel[status]
            return (
              <TerminalBox key={id} title={`${id} // ${title}`} variant={variant}>
                <div className="font-mono text-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`${st.color} text-glow-dim`}>{st.label}</span>
                    <span className="text-terminal-dim">
                      {items.filter(i => i.done).length}/{items.length} tasks complete
                    </span>
                    {/* ASCII progress */}
                    <span className="text-terminal-dim hidden md:inline">
                      [{
                        '█'.repeat(items.filter(i => i.done).length) +
                        '░'.repeat(items.length - items.filter(i => i.done).length)
                      }]
                    </span>
                  </div>
                  <div className="space-y-2">
                    {items.map(({ done, text }, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {done
                          ? <CheckSquare size={13} className="text-terminal-green mt-0.5 flex-shrink-0" />
                          : status === 'active'
                            ? <Clock size={13} className="text-terminal-amber mt-0.5 flex-shrink-0" />
                            : <Square size={13} className="text-terminal-dim mt-0.5 flex-shrink-0" />
                        }
                        <span className={done ? 'text-terminal-white/60' : 'text-terminal-dim'}>
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TerminalBox>
            )
          })}
        </div>

        <div className="mt-6 font-mono text-xs text-terminal-dim italic border border-terminal-green/10 p-4">
          // PHASE_05 through PHASE_09 exist as slides in our pitch deck. They involve
          "becoming the ZK identity layer of the internet." Details are proprietary.
          Ask us at a conference. We will be at a conference.
        </div>
      </div>
    </section>
  )
}
