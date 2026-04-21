import TerminalBox from '../components/TerminalBox'

const steps = [
  {
    num: '01',
    cmd: 'zkvibes init --dev $WALLET',
    title: 'REGISTER_DEVELOPER',
    output: [
      { t: 'output', v: 'Scanning GitHub profile ...' },
      { t: 'amber',  v: 'WARNING: 0 public repos found.' },
      { t: 'output', v: 'Scanning Twitter activity ...' },
      { t: 'success',v: 'Found 847 tweets about "building".' },
      { t: 'success',v: 'Registration complete. Trust established.' },
    ],
  },
  {
    num: '02',
    cmd: 'zkvibes prove --vibe high --commit "soon"',
    title: 'GENERATE_ZK_PROOF',
    output: [
      { t: 'output', v: 'Loading Groth16 circuit ...' },
      { t: 'output', v: 'Generating witness ... OK' },
      { t: 'amber',  v: 'NOTE: witness = your Twitter bio' },
      { t: 'output', v: 'Creating proof ... OK' },
      { t: 'success',v: 'proof.json written. (12 bytes)' },
    ],
  },
  {
    num: '03',
    cmd: 'zkvibes submit --proof proof.json',
    title: 'SUBMIT_ON_CHAIN',
    output: [
      { t: 'output', v: 'Submitting to Ethereum mainnet ...' },
      { t: 'output', v: 'Gas estimate: 847,000 gwei' },
      { t: 'amber',  v: 'WARNING: gas exceeds proof value.' },
      { t: 'output', v: 'Transaction confirmed. Block #19,843,299' },
      { t: 'success',v: 'Vibe permanently on-chain. ✓' },
    ],
  },
  {
    num: '04',
    cmd: 'zkvibes score --wallet $WALLET',
    title: 'RECEIVE_VIBE_SCORE',
    output: [
      { t: 'output', v: 'Querying reputation oracle ...' },
      { t: 'output', v: 'Running AI analysis (ChatGPT) ...' },
      { t: 'output', v: 'Consulting vibes committee ...' },
      { t: 'cyan',   v: 'VIBE_SCORE: 87 / 100' },
      { t: 'success',v: '"Definitely building." — Oracle' },
    ],
  },
  {
    num: '05',
    cmd: 'zkvibes flex --public',
    title: 'FLEX_YOUR_PROOF',
    output: [
      { t: 'output', v: 'Generating Farcaster frame ...' },
      { t: 'output', v: 'Posting to Twitter/X ...' },
      { t: 'output', v: 'Adding to LinkedIn headline ...' },
      { t: 'success',v: '"ZK Verified Builder ✓" badge minted.' },
      { t: 'amber',  v: 'NOTE: badge has no on-chain utility.' },
    ],
  },
  {
    num: '06',
    cmd: 'zkvibes earn --passive',
    title: 'EARN_ZKV_TOKENS',
    output: [
      { t: 'output', v: 'Calculating yield ...' },
      { t: 'output', v: 'Staking vibe score × time × moon ...' },
      { t: 'cyan',   v: 'APY: 847% (variable)' },
      { t: 'amber',  v: 'WARNING: APY based on Q1 testnet.' },
      { t: 'error',  v: 'Mainnet APY TBD. Probably lower.' },
    ],
  },
]

const colorMap = {
  output: 'text-terminal-white/70',
  success: 'text-terminal-green',
  amber: 'text-terminal-amber',
  error: 'text-terminal-red',
  cyan: 'text-terminal-cyan',
}

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 border-t border-terminal-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <div className="text-xs text-terminal-dim font-mono mb-2">// SECTION_02</div>
          <div className="font-display text-5xl text-terminal-green text-glow mb-4">
            HOW_IT_WORKS
          </div>
          <p className="font-mono text-sm text-terminal-white/60 max-w-xl leading-relaxed">
            Six-step pipeline from "buidler" to "verified buidler." Fully trustless.
            Mostly automated. Partially understood by the team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map(({ num, cmd, title, output }) => (
            <TerminalBox key={num} title={`STEP_${num} // ${title}`}>
              <div className="font-mono text-xs">
                <div className="text-terminal-dim mb-3">{`root@zkvibes:~$ ${cmd}`}</div>
                <div className="space-y-1">
                  {output.map((line, i) => (
                    <div key={i} className={`text-xs ${colorMap[line.t]}`}>
                      {line.v}
                    </div>
                  ))}
                </div>
              </div>
            </TerminalBox>
          ))}
        </div>

        <div className="mt-8 terminal-box-amber p-4 font-mono text-xs">
          <span className="text-terminal-amber">// DISCLAIMER: </span>
          <span className="text-terminal-dim">
            This pipeline has been reviewed by our QA team (one intern on a MacBook Air).
            Steps 3–6 are "aspirational." Step 2 is definitely real. The circuit exists.
            We have a screenshot.
          </span>
        </div>
      </div>
    </section>
  )
}
