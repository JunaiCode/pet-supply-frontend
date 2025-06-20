import Image from "next/image"

export const Branding = ()=>{
    return(<div className="order-1 sm:order-none">
              <div className="flex items-centergap-3 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Pet Supply Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <h2 className="text-2xl font-extrabold text-pink-900">Pet Supply</h2>
              </div>
              <p className="text-sm leading-relaxed text-pink-700">
                Your one-stop shop for all your pet’s needs. We deliver quality, love, and care in every product.
              </p>
            </div>)
}