import TerminalBox from '../components/TerminalBox'

const team = [
  {
    handle: 'zkchad.eth',
    role: 'CEO // Chief Entropy Officer',
    bio: [
      'Previously "built" 3 protocols (all rugged).',
      'Has never written a Circom circuit.',
      '142k Twitter followers. 0 GitHub stars.',
      'Quoted in The Block once. Framed it.',
    ],
    vibe: 87,
    langs: ['Solidity (ChatGPT)', 'Twitter', 'Keynote.app'],
    status: 'ONLINE',
    statusColor: 'text-terminal-green',
  },
  {
    handle: 'nullptr.eth',
    role: 'CTO // Chief Theoretic Officer',
    bio: [
      'PhD in mathematics (unrelated field).',
      'Wrote the whitepaper. All 47 pages.',
      'Can explain ZK proofs at 3 different',
      'levels of handwaving.',
    ],
    vibe: 92,
    langs: ['LaTeX', 'Circom (Hello World)', 'Notion'],
    status: 'BUILDING',
    statusColor: 'text-terminal-amber',
  },
  {
    handle: 'vibe_validator',
    role: 'Head of Vibe Consensus',
    bio: [
      'Former Discord moderator (3 servers).',
      'Invented "vibe-based governance" concept.',
      '890 Warpcast followers. Very niche.',
      'Responds only to DMs, not emails.',
    ],
    vibe: 79,
    langs: ['Markdown', 'Emoji', 'Google Docs'],
    status: 'VIBING',
    statusColor: 'text-terminal-cyan',
  },
  {
    handle: '0x????.eth',
    role: 'Lead Engineer // Anonymous',
    bio: [
      'Identity: classified (for safety).',
      'Deployed the Hello World circuit.',
      'Online 2-4 AM UTC only.',
      '"gm" is the only confirmed output.',
    ],
    vibe: 99,
    langs: ['Rust (claimed)', 'Circom', 'unknown'],
    status: 'UNKNOWN',
    statusColor: 'text-terminal-red',
  },
  {
    handle: 'proofmax.eth',
    role: 'ZK Research Lead',
    bio: [
      'Reads ZK papers. Writes Twitter threads.',
      'Has bookmarked 847 academic papers.',
      'Read approximately 12 of them fully.',
      '"Very bullish on polynomial commitments."',
    ],
    vibe: 84,
    langs: ['Twitter/X', 'Overleaf', 'Obsidian'],
    status: 'RESEARCHING',
    statusColor: 'text-terminal-amber',
  },
  {
    handle: 'shill_ops.eth',
    role: 'Head of Growth // Ecosystem',
    bio: [
      'Manages the Telegram (847 members).',
      'Sends "gm" to 5 Discord servers daily.',
      'Calls every protocol "underrated gem."',
      '"We are building in silence." — (not us)',
    ],
    vibe: 71,
    langs: ['Telegram', 'Discord', 'Typeform'],
    status: 'SHILLING',
    statusColor: 'text-terminal-cyan',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 border-t border-terminal-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="text-xs text-terminal-dim font-mono mb-2">// SECTION_06</div>
          <div className="font-display text-5xl text-terminal-green text-glow mb-4">
            TEAM.JSON
          </div>
          <p className="font-mono text-sm text-terminal-white/60 max-w-xl">
            World-class builders. Most of them. LinkedIn profiles available.
            Background checks: pending (for 8 months).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {team.map(({ handle, role, bio, vibe, langs, status, statusColor }) => (
            <TerminalBox key={handle} title={`whoami // ${handle}`}>
              <div className="font-mono text-xs">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-terminal-green text-glow-dim font-bold">{handle}</span>
                  <span className={`${statusColor} text-xs`}>[{status}]</span>
                </div>

                <div className="text-terminal-amber text-xs mb-3">{role}</div>

                {/* Bio */}
                <div className="border-l border-terminal-green/20 pl-3 mb-3 space-y-0.5">
                  {bio.map((line, i) => (
                    <div key={i} className="text-terminal-white/50">{line}</div>
                  ))}
                </div>

                {/* Vibe score */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-terminal-dim">VIBE_SCORE:</span>
                  <span className="text-terminal-green text-glow-dim font-bold">{vibe}/100</span>
                  <span className="text-terminal-dim">
                    {'█'.repeat(Math.round(vibe / 10))}{'░'.repeat(10 - Math.round(vibe / 10))}
                  </span>
                </div>

                {/* Languages */}
                <div className="text-terminal-dim text-xs">
                  <span className="text-terminal-dim/60">STACK: </span>
                  {langs.map((l, i) => (
                    <span key={i} className="text-terminal-cyan">
                      {l}{i < langs.length - 1 ? <span className="text-terminal-dim"> | </span> : ''}
                    </span>
                  ))}
                </div>
              </div>
            </TerminalBox>
          ))}
        </div>

        {/* Hiring */}
        <TerminalBox title="careers.txt" variant="amber">
          <div className="font-mono text-xs space-y-1">
            <div className="text-terminal-dim">root@zkvibes:~$ cat careers.txt</div>
            <div className="text-terminal-amber mt-2">WE ARE HIRING:</div>
            <div className="text-terminal-white/60">- 1x Circom Developer (must know: Circom, Rust, Go, Haskell, Vim, ZK math)</div>
            <div className="text-terminal-white/60">- 1x "DeFi Strategist" (must have opinions on MEV)</div>
            <div className="text-terminal-dim italic">// Compensation: 80% tokens, 20% "equity" in a Delaware C-Corp</div>
            <div className="text-terminal-dim italic">// Remote. Must be passionate. Must not ask about salary.</div>
          </div>
        </TerminalBox>
      </div>
    </section>
  )
}
