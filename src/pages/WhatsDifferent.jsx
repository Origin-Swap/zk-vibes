import TerminalBox from '../components/TerminalBox'

const comparisons = [
  { feature: 'Privacy-preserving proofs',    us: true,  them: false, note: '// we say "ZK" on every slide' },
  { feature: 'No code required to "build"',  us: true,  them: false, note: '// industry first' },
  { feature: 'Vibe-based reputation score',  us: true,  them: false, note: '// patent pending' },
  { feature: 'Groth16 circuit (deployed)',   us: true,  them: false, note: '// says Hello World' },
  { feature: 'Working product',              us: false, them: true,  note: '// "pre-product stage"' },
  { feature: 'Actual ZK implementation',     us: false, them: true,  note: '// "inspired by ZK"' },
  { feature: '12-word buzzword pitch',        us: true,  them: false, note: '// rehearsed 200 times' },
  { feature: 'Self-signed audit report',     us: true,  them: false, note: '// PASSED (we wrote it)' },
]

const differentiators = [
  { val: 'Groth16',  label: 'Proving System',   note: '// read docs once' },
  { val: 'Circom',   label: 'Circuit Language',  note: '// spelled correctly' },
  { val: '12 bytes', label: 'Proof Size',         note: '// very compact' },
  { val: '∞',        label: 'Trust Required',     note: '// just vibe' },
]

export default function WhatsDifferent() {
  return (
    <section id="different" className="py-24 border-t border-terminal-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="text-xs text-terminal-dim font-mono mb-2">// SECTION_03</div>
          <div className="font-display text-5xl text-terminal-green text-glow mb-4">
            WHY_WE_ARE_DIFFERENT
          </div>
          <p className="font-mono text-sm text-terminal-white/60 max-w-xl">
            Competitive analysis conducted using a Google Sheet and strong opinions.
          </p>
        </div>

        {/* Key differentiators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {differentiators.map(({ val, label, note }) => (
            <div key={label} className="terminal-box-bright p-5 text-center">
              <div className="font-display text-3xl text-terminal-green text-glow mb-1">{val}</div>
              <div className="text-xs text-terminal-white/70 uppercase tracking-wider mb-1">{label}</div>
              <div className="text-xs text-terminal-dim italic">{note}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <TerminalBox title="diff --zkvibes vs --others" variant="bright">
          <div className="font-mono text-xs overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-12 gap-2 border-b border-terminal-green/20 pb-2 mb-2">
              <div className="col-span-5 text-terminal-dim">FEATURE</div>
              <div className="col-span-3 text-terminal-green text-center">ZK_VIBES</div>
              <div className="col-span-2 text-terminal-dim text-center">OTHERS</div>
              <div className="col-span-2 text-terminal-dim">NOTE</div>
            </div>

            {comparisons.map(({ feature, us, them, note }, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 gap-2 py-2 border-b border-terminal-green/5 hover:bg-terminal-green/3 transition-colors ${
                  i % 2 === 0 ? 'bg-terminal-green/[0.02]' : ''
                }`}
              >
                <div className="col-span-5 text-terminal-white/70">{feature}</div>
                <div className="col-span-3 text-center">
                  {us
                    ? <span className="text-terminal-green text-glow-dim">[✓ YES]</span>
                    : <span className="text-terminal-red">[✗ NO ]</span>
                  }
                </div>
                <div className="col-span-2 text-center">
                  {them
                    ? <span className="text-terminal-dim">[✓]</span>
                    : <span className="text-terminal-dim">[✗]</span>
                  }
                </div>
                <div className="col-span-2 text-terminal-dim italic">{note}</div>
              </div>
            ))}
          </div>
        </TerminalBox>

        <div className="mt-4 font-mono text-xs text-terminal-dim italic">
          * Data sourced from our competitive research team (one person, one afternoon, no primary sources).
          Methodology available upon request. Request will be ignored.
        </div>
      </div>
    </section>
  )
}
