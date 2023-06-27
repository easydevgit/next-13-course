import {CustomMDX} from "@/app/components/CustomMDXRemote"

export default async function Home() {
    const res = await fetch('http://localhost:3004/article', {cache: 'no-store'})
    const data = await res.json()

    return (
        <CustomMDX
            source={data.data}
        />
    )
}
