// Renders text with CSS glitch layers using data-text attribute
export default function GlitchHeading({ text, className = '', tag: Tag = 'h2' }) {
  return (
    <Tag
      className={`glitch-wrap relative inline-block ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  )
}
