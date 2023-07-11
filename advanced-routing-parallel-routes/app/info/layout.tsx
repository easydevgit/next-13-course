
export const metadata = {
    title: 'Info page',
    description: 'info page description',
}

export default function InfoLayout({children, contacts, team}: {
    children: React.ReactNode,
    contacts: React.ReactNode,
    team: React.ReactNode,
}) {
    return (
        <div className="container max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            {children}
            <div className="grid grid-cols-2">
                {contacts}
                {team}
            </div>
        </div>
    )
}
