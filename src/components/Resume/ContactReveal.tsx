import { useState } from 'react'
import { ContactItem } from './ContactItem'

export default function ContactReveal() {

  const [revealed, setRevealed] = useState(false)

  // reconstruction dynamique téléphone
  const phoneParts = ['+33', '6', '01', '28', '94', '74']
  const phone = phoneParts.join(' ')
  const phoneHref = `tel:${phoneParts.join('').replace(/\s/g, '')}`
  const calendar = 'Réserver un appel'
  const calendarParts = ['https://tidycal.com', 'ortyz', 'appel-decouverte-pre-entretien']
  const calendarHref = `${calendarParts.join('/').replace(/\s/g, '')}`

  // reconstruction dynamique email
  const emailUser = 'messaoud'
  const emailDomain = 'harrouz.fr'
  const email = `${emailUser}@${emailDomain}`

  if (!revealed) {
    return (
      <button
        onClick={() => setRevealed(true)}
        className="group flex items-center gap-3 text-sm text-resume-text-secondary hover:text-resume-primary transition-colors duration-200 cursor-pointer"
      >
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        Contacter
      </button>
    )
  }

  return (
    <>
      <ContactItem
        type="email"
        label={email}
        href={`mailto:${email}`}
      />

      <ContactItem
        type="phone"
        label={phone}
        href={phoneHref}
      />

      <ContactItem
        type="website"
        label={calendar}
        href={calendarHref}
      />
    </>
  )
}