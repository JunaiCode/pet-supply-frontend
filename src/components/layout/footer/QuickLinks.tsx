import Link from "next/link"

export const QuickLinks = ()=>{
    return(<div className="sm:flex-col order-3 sm:order-none">
          <h3 className="text-lg font-semibold mb-4 sm:text-center text-pink-900">Quick Links</h3>
          <ul className="space-y-2  sm:flex-col text-sm text-pink-700 flex justify-start  items-baseline gap-2 sm:items-center">
            <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
            <Link href="/products" className="hover:text-pink-500 transition-colors">Products</Link>
            <Link href="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
            <Link href="/about" className="hover:text-pink-500 transition-colors">About Us</Link>
          </ul>
        </div>)
}