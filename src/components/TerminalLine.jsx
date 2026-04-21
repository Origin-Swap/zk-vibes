// Renders a single terminal prompt line
// prefix: the prompt symbol/user (e.g. "root@zkvibes:~$")
// text: the command or output text
// type: 'cmd' | 'output' | 'error' | 'success' | 'comment'

export default function TerminalLine({ prefix, text, type = 'output', delay = 0 }) {
  const colorMap = {
    cmd:     'text-terminal-green',
    output:  'text-terminal-white',
    error:   'text-terminal-red',
    success: 'text-terminal-green',
    comment: 'text-terminal-dim',
    amber:   'text-terminal-amber',
    cyan:    'text-terminal-cyan',
  }

  return (
    <div
      className={`flex gap-2 text-sm leading-relaxed font-mono ${colorMap[type] || 'text-terminal-white'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {prefix && (
        <span className="text-terminal-dim flex-shrink-0">{prefix}</span>
      )}
      <span>{text}</span>
    </div>
  )
}
