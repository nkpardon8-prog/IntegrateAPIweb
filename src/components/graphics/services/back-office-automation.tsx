import { BaseServiceGraphic } from './base-service-graphic'

export function BackOfficeAutomationGraphic() {
  return (
    <BaseServiceGraphic>
      <circle cx="28" cy="28" r="14" strokeDasharray="3 2" />
      <rect x="24" y="10" width="8" height="6" rx="1" />
      <rect x="40" y="32" width="8" height="6" rx="1" />
      <rect x="8" y="32" width="8" height="6" rx="1" />
      <path d="M34 14 L38 10" />
      <path d="M38 10 L36 12" />
    </BaseServiceGraphic>
  )
}
