import { useState } from 'react'
import TerminalBox from '../components/TerminalBox'

const faqs = [
  {
    q: 'Is the ZK proof actually cryptographically sound?',
    a: [
      { t: 'output', v: 'Excellent question. The short answer is: "yes."' },
      { t: 'output', v: 'The long answer is that our circuit uses Groth16,' },
      { t: 'output', v: 'which is a well-established proving system.' },
      { t: 'amber',  v: 'The circuit itself proves iAmBuilding == true.' },
      { t: 'dim',    v: '// iAmBuilding is a boolean we set ourselves.' },
    ],
  },
  {
    q: 'What does the ZK proof actually prove?',
    a: [
      { t: 'output', v: 'It proves that you know a secret "vibe value"' },
      { t: 'output', v: 'without revealing the vibe value itself.' },
      { t: 'amber',  v: 'The vibe value is defined by the prover (you).' },
      { t: 'dim',    v: '// You define your own vibe. Trustless.' },
      { t: 'dim',    v: '// We thought about this for 3 hours.' },
    ],
  },
  {
    q: 'Has the smart contract been audited?',
    a: [
      { t: 'output', v: 'Yes. Internal audit completed in March 2024.' },
      { t: 'output', v: 'Score: 100/100. Zero critical findings.' },
      { t: 'amber',  v: 'Auditor: our own smart contract (recursive).' },
      { t: 'error',  v: 'External audit: "in progress" (since Jan 2024).' },
      { t: 'dim',    v: '// We emailed Trail of Bits. No reply yet.' },
    ],
  },
  {
    q: 'What blockchain is ZK Proof of Vibes on?',
    a: [
      { t: 'output', v: 'We are "chain-agnostic."' },
      { t: 'dim',    v: '// Translation: we have not decided yet.' },
      { t: 'output', v: 'Currently targeting Ethereum + zkSync Era,' },
      { t: 'output', v: 'Polygon zkEVM, Scroll, Linea, and StarkNet.' },
      { t: 'amber',  v: 'Deployed: 0 of the above. (Testnet: localhost)' },
    ],
  },
  {
    q: 'When is TGE (Token Generation Event)?',
    a: [
      { t: 'output', v: 'TGE is scheduled for "Q1 2025."' },
      { t: 'amber',  v: 'This is the same answer we gave in Q1 2024.' },
      { t: 'output', v: 'We define Q1 liberally.' },
      { t: 'dim',    v: '// Q1 = any quarter where we are ready.' },
      { t: 'dim',    v: '// We are not ready.' },
    ],
  },
  {
    q: 'Is this financial advice?',
    a: [
      { t: 'output', v: 'No. NFA. DYOR. GM. WAGMI. LFG. IYKYK.' },
      { t: 'output', v: 'These four letters constitute our full' },
      { t: 'output', v: 'legal disclaimer and terms of service.' },
      { t: 'dim',    v: '// Lawyer reviewed this. She said "no."' },
      { t: 'dim',    v: '// We posted it anyway.' },
    ],
  },
  {
    q: 'Who is the anonymous dev (0x????.eth)?',
    a: [
      { t: 'output', v: 'We cannot disclose this for security reasons.' },
      { t: 'dim',    v: '// Also: we do not know either.' },
      { t: 'output', v: 'He appeared in our Discord one day.' },
      { t: 'output', v: 'Deployed the Hello World circuit.' },
      { t: 'amber',  v: 'Has not been seen since. GM still detected.' },
    ],
  },
  {
    q: 'What happens if the project fails?',
    a: [
      { t: 'error',  v: 'ERROR: undefined variable "fail"' },
      { t: 'output', v: 'We do not recognize this terminology.' },
      { t: 'output', v: 'In Web3 we say "the market was not ready"' },
      { t: 'output', v: 'or "we are pivoting to a new thesis."' },
      { t: 'dim',    v: '// Treasury will fund the next project.' },
    ],
  },
]

const colorMap = {
  output: 'text-terminal-white/70',
  amber:  'text-terminal-amber',
  error:  'text-terminal-red',
  dim:    'text-terminal-dim',
  success:'text-terminal-green',
  cyan:   'text-terminal-cyan',
}

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 border-t border-terminal-green/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="text-xs text-terminal-dim font-mono mb-2">// SECTION_07</div>
          <div className="font-display text-5xl text-terminal-green text-glow mb-4">
            FAQ.TXT
          </div>
          <p className="font-mono text-sm text-terminal-white/60">
            Frequently asked questions. Answers written by our AI and approved by nobody.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`font-mono transition-all duration-200 ${
                open === i ? 'terminal-box-bright' : 'terminal-box'
              }`}
            >
              <button
                className="w-full text-left px-4 py-3 flex items-start justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-start gap-2">
                  <span className="text-terminal-dim flex-shrink-0">
                    {open === i ? '[-]' : '[+]'}
                  </span>
                  <span className={`text-xs leading-relaxed ${open === i ? 'text-terminal-green' : 'text-terminal-white/80'}`}>
                    {q}
                  </span>
                </div>
              </button>

              {open === i && (
                <div className="px-4 pb-4 border-t border-terminal-green/10 pt-3">
                  <div className="text-xs text-terminal-dim mb-2">
                    {'root@zkvibes:~$ zkvibes --answer "' + q.slice(0, 30) + '..."'}
                  </div>
                  <div className="space-y-1 pl-2 border-l border-terminal-green/20">
                    {a.map((line, j) => (
                      <div key={j} className={`text-xs ${colorMap[line.t]}`}>
                        {line.v}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <TerminalBox title="contact.sh" variant="bright">
            <div className="font-mono text-xs space-y-2">
              <div className="text-terminal-dim">root@zkvibes:~$ ./contact --support</div>
              <div className="text-terminal-white/60 mt-2">
                Still have questions? Join our Discord.
              </div>
              <div className="text-terminal-dim italic">
                // Response time: 72 hours (weekdays, UTC+8, excluding conferences)
              </div>
              <button className="btn-terminal text-xs px-6 py-2 mt-2">
                &gt; JOIN_DISCORD
              </button>
            </div>
          </TerminalBox>
        </div>
      </div>
    </section>
  )
}
