// A terminal window frame with optional title bar
export default function TerminalBox({ title, children, className = '', variant = 'default' }) {
  const variantClass = {
    default: 'terminal-box',
    bright:  'terminal-box-bright',
    red:     'terminal-box-red',
    amber:   'terminal-box-amber',
  }[variant] || 'terminal-box'

  return (
    <div className={`${variantClass} ${className}`}>
      {title && (
        <div className="flex items-center gap-2 border-b border-terminal-green/20 px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-terminal-red opacity-80" />
          <span className="w-2 h-2 rounded-full bg-terminal-amber opacity-80" />
          <span className="w-2 h-2 rounded-full bg-terminal-green opacity-80" />
          <span className="ml-2 text-xs text-terminal-dim tracking-widest uppercase">{title}</span>
        </div>
      )}
      <div className="p-4 md:p-6">
        {children}
      </div>
    </div>
  )
}
