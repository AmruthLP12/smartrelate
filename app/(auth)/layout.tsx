import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-gray-100 dark:bg-gray-800 items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/placeholder.svg?height=1080&width=1080"
            alt="Auth background"
            layout="fill"
            objectFit="cover"
            className="rounded-r-lg"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 overflow-y-auto">{children}</div>
    </div>
  )
}

