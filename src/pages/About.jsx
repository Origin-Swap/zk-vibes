import TerminalBox from '../components/TerminalBox'
import TerminalLine from '../components/TerminalLine'

const pillars = [
  {
    cmd:   'zkvibes --module privacy',
    title: '// PRIVACY_LAYER',
    color: 'text-terminal-green',
    variant: 'default',
    lines: [
      { type: 'output', text: 'Your code stays hidden. Forever.' },
      { type: 'output', text: 'Prove you built something without' },
      { type: 'output', text: 'showing what you built. Or if you' },
      { type: 'output', text: 'built anything at all. Trustless.' },
    ],
  },
  {
    cmd:   'zkvibes --module reputation',
    title: '// REPUTATION_LAYER',
    color: 'text-terminal-cyan',
    variant: 'default',
    lines: [
      { type: 'output', text: 'On-chain dev scores, 0-100.' },
      { type: 'output', text: 'Scores below 60: auto-rejected.' },
      { type: 'output', text: 'Scores above 60: auto-approved.' },
      { type: 'amber',  text: 'NOTE: hardcoded to return 87.' },
    ],
  },
  {
    cmd:   'zkvibes --module consensus',
    title: '// VIBE_CONSENSUS',
    color: 'text-terminal-amber',
    variant: 'amber',
    lines: [
      { type: 'output', text: 'Community validates your vibe.' },
      { type: 'output', text: 'No code review. No PR comments.' },
      { type: 'output', text: 'Just 🔥 or 💀 emoji votes.' },
      { type: 'amber',  text: 'WARNING: vibe is subjective.' },
    ],
  },
  {
    cmd:   'zkvibes --module circuits',
    title: '// ZK_CIRCUITS',
    color: 'text-terminal-red',
    variant: 'red',
    lines: [
      { type: 'output', text: 'Built with Circom (probably).' },
      { type: 'output', text: 'Uses Groth16 proving system.' },
      { type: 'output', text: '1 circuit deployed to testnet.' },
      { type: 'error',  text: 'ERROR: circuit says Hello World.' },
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <div className="text-xs text-terminal-dim font-mono mb-2">// SECTION_01</div>
          <div className="font-display text-5xl text-terminal-green text-glow mb-4">
            ABOUT_THE_PROTOCOL
          </div>
          <div className="font-mono text-sm text-terminal-white/60 max-w-2xl leading-relaxed">
            ZK Proof of Vibes is a trustless, permissionless, privacy-preserving developer
            reputation primitive. It uses zero-knowledge proofs to confirm that a developer
            is "building" without requiring them to show anything they've built.
          </div>
          <div className="font-mono text-xs text-terminal-dim mt-2 italic">
            // This is the most useful abstraction in Web3. We are not taking questions.
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {pillars.map(({ cmd, title, color, variant, lines }) => (
            <TerminalBox key={title} title={title} variant={variant}>
              <div className="font-mono text-xs text-terminal-dim mb-3">{`root@zkvibes:~$ ${cmd}`}</div>
              <div className="space-y-1">
                {lines.map((l, i) => (
                  <TerminalLine key={i} text={l.text} type={l.type} />
                ))}
              </div>
            </TerminalBox>
          ))}
        </div>

        {/* Mission terminal */}
        <TerminalBox title="mission_statement.txt" variant="bright">
          <div className="font-mono text-sm space-y-2">
            <TerminalLine prefix="root@zkvibes:~$" text="cat mission.txt" type="cmd" />
            <div className="border-l-2 border-terminal-green/40 pl-4 mt-3 space-y-2">
              <p className="text-terminal-white/80 leading-relaxed">
                "We believe developers should be trusted on vibes alone. The blockchain
                doesn't need to know <em className="text-terminal-amber">what</em> you built —
                only <em className="text-terminal-green">that</em> you built. Probably."
              </p>
              <p className="text-terminal-dim text-xs italic">
                — ZK Proof of Vibes: A Technical and Spiritual Manifesto (47 pages, 3 footnotes, 0 citations)
              </p>
            </div>
            <TerminalLine prefix="root@zkvibes:~$" text="" type="cmd" />
          </div>
        </TerminalBox>
      </div>
    </section>
  )
}
