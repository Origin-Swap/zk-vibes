import { useState, useEffect } from 'react'

export default function Typewriter({ lines = [], speed = 40, className = '' }) {
  // lines: array of { text, type } objects
  const [displayed, setDisplayed] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true)
      return
    }
    const line = lines[currentLine]
    if (currentChar < line.text.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const copy = [...prev]
          if (!copy[currentLine]) copy[currentLine] = { ...line, text: '' }
          copy[currentLine] = { ...line, text: line.text.slice(0, currentChar + 1) }
          return copy
        })
        setCurrentChar(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    } else {
      // move to next line after short pause
      const t = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, 180)
      return () => clearTimeout(t)
    }
  }, [currentLine, currentChar, lines, speed])

  const colorMap = {
    cmd:     'text-terminal-green',
    output:  'text-terminal-white',
    error:   'text-terminal-red',
    success: 'text-terminal-green text-glow-dim',
    comment: 'text-terminal-dim',
    amber:   'text-terminal-amber',
    cyan:    'text-terminal-cyan',
  }

  return (
    <div className={`font-mono text-sm space-y-1 ${className}`}>
      {displayed.map((line, i) => (
        <div key={i} className={`flex gap-2 ${colorMap[line.type] || 'text-terminal-white'}`}>
          {line.prefix && <span className="text-terminal-dim flex-shrink-0">{line.prefix}</span>}
          <span>{line.text}</span>
        </div>
      ))}
      {!done && (
        <div className="flex gap-2 text-terminal-green">
          {lines[currentLine]?.prefix && (
            <span className="text-terminal-dim">{lines[currentLine].prefix}</span>
          )}
          <span className="cursor" />
        </div>
      )}
      {done && <span className="cursor text-terminal-green" />}
    </div>
  )
}
