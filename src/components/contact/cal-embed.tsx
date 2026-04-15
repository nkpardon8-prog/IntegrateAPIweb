'use client'

import { useEffect } from 'react'

export function CalEmbed() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK

  useEffect(() => {
    if (!calLink) return

    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [calLink])

  if (!calLink) return null

  return (
    <div
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className="w-full min-h-[500px]"
    />
  )
}
