export interface AboutTitle {
    title: string
    speed: number
}
export interface AboutTitleProps {
    data: AboutTitle[]
    setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>
}

export interface TitleProps {
    data: {
        title: string
        speed: number
        i: number
    }
    setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>
}