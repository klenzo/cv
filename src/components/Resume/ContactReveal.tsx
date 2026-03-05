import { useState } from 'react'
import { ContactItem } from './ContactItem'
import { PhoneIcon } from '@/components/icons'

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
        <PhoneIcon className="w-4 h-4" />
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