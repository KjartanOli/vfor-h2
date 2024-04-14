'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './NavBar.module.css';

const navlinks: Array<{ href: string, text: string }> = [
  { href: '/', text: 'Home', },
  { href: '/games', text: 'Games' }
]
export default function NavBar() {
  const pathname = usePathname()
  return (
    <nav>
      <ul>
        {navlinks.map(
          l => <li key={l.href}>
                 <Link href={l.href}
                   className={pathname === l.href ? styles.active : styles.inactive}>{l.text}</Link>
               </li>)}
      </ul>
    </nav>
  )
}
