export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-terminal-green/20 bg-terminal-black py-12 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-3xl text-terminal-green text-glow tracking-widest mb-3">
              ZK_VIBES
            </div>
            <p className="text-xs text-terminal-dim leading-relaxed">
              Trustless developer reputation protocol.<br />
              Powered by zero-knowledge proofs and<br />
              a compelling narrative.
            </p>
            <p className="text-xs text-terminal-dim/50 mt-4 italic">
              // github.com/zkvibes (private repo, for security)
            </p>
          </div>

          {/* Protocol links */}
          <div>
            <p className="text-xs text-terminal-green mb-4 tracking-widest uppercase">// Protocol</p>
            {['Documentation', 'Whitepaper_v1.pdf', 'Audit_Report.pdf', 'Bug_Bounty', 'Governance_Forum'].map(item => (
              <div key={item} className="mb-2">
                <a href="#" className="text-xs text-terminal-dim hover:text-terminal-green transition-colors font-mono">
                  &gt; {item}
                </a>
              </div>
            ))}
          </div>

          {/* Community */}
          <div>
            <p className="text-xs text-terminal-green mb-4 tracking-widest uppercase">// Community</p>
            {['Discord_Server', 'Telegram_Group', 'Twitter_X', 'Mirror_Blog', 'Snapshot_DAO'].map(item => (
              <div key={item} className="mb-2">
                <a href="#" className="text-xs text-terminal-dim hover:text-terminal-green transition-colors font-mono">
                  &gt; {item}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-terminal-green/10 pt-6 font-mono text-xs text-terminal-dim/40 flex flex-col md:flex-row justify-between gap-2">
          <span>© {year} ZK Proof of Vibes. Not financial advice. DYOR. GM. WAGMI.</span>
          <span className="text-terminal-green/30">// built with vibes and cryptographic hand-waving</span>
        </div>
      </div>
    </footer>
  )
}
