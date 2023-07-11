import Link from "next/link";

export default function Home() {
  return (
      <>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Shaping a
                world with <span className="text-primary dark:text-white">reimagination.</span></h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300 mb-7">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
                doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
                doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas
                doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
              </p>

              <div><Link href='/info' >Information</Link></div>
            </div>
          </div>
        </div>
      </>
  )
}
