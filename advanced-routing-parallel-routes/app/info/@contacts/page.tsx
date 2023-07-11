export default async function Contacts() {

    const films = await fetch('https://swapi.tech/api/films').then(res => res.json())

    return (
        <div className="my-24 mx-auto md:px-6">
            <section className="mb-32">
                <div className="flex flex-wrap">
                    <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:px-3 lg:px-6">
                        <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
                        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium, modi accusantium ipsum corporis quia asperiores
                            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
                            autem omnis fugiat perspiciatis? Ad, veritatis.
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            New York, 94126, United States
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            + 01 234 567 89
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            info@gmail.com
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
