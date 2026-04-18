import { BaseServiceGraphic } from './base-service-graphic'

export function SystemMaintenanceEvolutionGraphic() {
  return (
    <BaseServiceGraphic>
      <circle cx="16" cy="20" r="6" />
      <circle cx="16" cy="20" r="2" />
      <line x1="16" y1="10" x2="16" y2="14" />
      <line x1="16" y1="26" x2="16" y2="30" />
      <line x1="6" y1="20" x2="10" y2="20" />
      <line x1="22" y1="20" x2="26" y2="20" />
      <line x1="10" y1="42" x2="46" y2="42" />
      <circle cx="14" cy="42" r="2" fill="currentColor" />
      <circle cx="28" cy="42" r="2" fill="currentColor" />
      <circle cx="42" cy="42" r="2" fill="currentColor" />
    </BaseServiceGraphic>
  )
}
