import { useEffect, useState } from 'react'
import GlitchHeading from '../components/GlitchHeading'
import Typewriter from '../components/Typewriter'
import TerminalBox from '../components/TerminalBox'

const bootLines = [
  { prefix: null,       text: 'BIOS v2.0.24 ... OK',                       type: 'comment' },
  { prefix: null,       text: 'Loading ZK kernel module ...',               type: 'comment' },
  { prefix: null,       text: 'Initializing proof system (Groth16) ... OK', type: 'comment' },
  { prefix: null,       text: 'Mounting vibe storage ... OK',               type: 'comment' },
  { prefix: null,       text: 'Connecting to Ethereum mainnet ... OK',      type: 'success' },
  { prefix: null,       text: '---------------------------------------',    type: 'comment' },
  { prefix: 'root@zkvibes:~$', text: 'zkvibes --generate-proof --developer=you --output=reputation.json', type: 'cmd' },
  { prefix: null,       text: '[████████████████████] 100%',                type: 'amber'   },
  { prefix: null,       text: 'Proof generated. Vibes verified. ✓',         type: 'success' },
  { prefix: 'root@zkvibes:~$', text: 'cat reputation.json',                 type: 'cmd'     },
  { prefix: null,       text: '{ "iAmBuilding": true, "proof": "0xc0ffee...dead" }', type: 'cyan' },
]

const stats = [
  { label: 'Proofs Generated',   value: '847,231',  note: '(self-reported)' },
  { label: 'Trusted Developers', value: '12',        note: '(the team)' },
  { label: 'ZK Circuits',        value: '1',         note: '(Hello World)' },
  { label: 'Audit Score',        value: '100/100',   note: '(self-audited)' },
]

export default function Hero() {
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowStats(true), 5500)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background ASCII art — subtle */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <pre className="text-terminal-green font-mono text-xs leading-4 absolute top-10 right-0 text-right">
{`
  ░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░ ZK_PROOF_OF_VIBES    ░░
  ░░ v1.0.0 // MAINNET    ░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░
  
  function prove(vibe) {
    require(iAmBuilding[msg.sender]);
    return zkSNARK(vibe);
  }
`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Title */}
          <div>
            <div className="text-xs text-terminal-dim font-mono mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span>MAINNET LIVE // EPOCH_47 // BLOCK #19,843,221</span>
            </div>

            <GlitchHeading
              text="ZK PROOF"
              tag="h1"
              className="font-display text-6xl md:text-8xl text-terminal-green text-glow leading-none block mb-2"
            />
            <div className="font-display text-5xl md:text-7xl text-terminal-white leading-none mb-2">
              OF VIBES
            </div>
            <div className="font-display text-xl md:text-2xl text-terminal-dim leading-none mb-8 tracking-widest">
              // PROTOCOL v1.0.0
            </div>

            <p className="text-sm text-terminal-white/70 leading-relaxed mb-3 font-mono max-w-lg">
              The world's first zero-knowledge proof system for verifying developer reputation
              without revealing actual code, commits, or any evidence of work whatsoever.
            </p>
            <p className="text-xs text-terminal-dim font-mono mb-8 italic">
              // "Trust the math, not the receipts." — ZK Vibes Whitepaper, p.1
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-terminal-solid text-sm px-6 py-3">
                &gt; GENERATE_PROOF
              </button>
              <button className="btn-terminal text-sm px-6 py-3">
                &gt; READ_WHITEPAPER
              </button>
            </div>
          </div>

          {/* Right — Terminal boot sequence */}
          <div>
            <TerminalBox title="zkvibes-terminal — bash — 80×24" variant="bright">
              <Typewriter lines={bootLines} speed={35} />
            </TerminalBox>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-opacity duration-1000 ${
            showStats ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {stats.map(({ label, value, note }) => (
            <div key={label} className="terminal-box p-5 text-center">
              <div className="font-display text-3xl text-terminal-green text-glow mb-1">{value}</div>
              <div className="text-xs text-terminal-white/70 tracking-wider uppercase mb-1">{label}</div>
              <div className="text-xs text-terminal-dim italic">{note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
