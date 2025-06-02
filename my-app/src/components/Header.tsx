import Link from "next/link";

export default function Header() {
    return <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link href='/'>Home</Link>
        <Link href='/About'>About</Link>
        <Link href='/Services'>Services</Link>
        <Link href='/Contact'>Contact</Link>
    </nav>
}