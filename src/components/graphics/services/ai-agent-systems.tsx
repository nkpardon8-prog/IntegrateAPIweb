import { BaseServiceGraphic } from './base-service-graphic'

export function AiAgentSystemsGraphic() {
  return (
    <BaseServiceGraphic>
      <circle cx="12" cy="28" r="4" />
      <circle cx="28" cy="14" r="4" />
      <circle cx="28" cy="42" r="4" />
      <circle cx="44" cy="28" r="4" />
      <path d="M15 26 L25 16" />
      <path d="M15 30 L25 40" />
      <path d="M31 16 L41 26" />
      <path d="M31 40 L41 30" />
      <path d="M44 32 Q48 40 36 44" strokeDasharray="2 2" />
    </BaseServiceGraphic>
  )
}
