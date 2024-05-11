import data from './data.json'

export interface Course {
    code: string
    name: string
}

export const getReport = (options: string[]) => {
    if(options.length < 3)
        return [];
    // @ts-ignore
    const values = Object.values(data).flatMap((v) => v.программы)
    
    const res: Course[] = []

    options.forEach((opt) => {
        if(["Русский язык", "Математика"].includes(opt))
            return
        values.forEach((v: any) => {
            if (v.вступительные_испытания.includes(opt)) {
                const name = `${v.направление} | ${v.профиль || v.специализация}`;

                if(!res.some((r) => r.name === name))

                res.push({
                    code: v.код,
                    name
                })
            }
        })
    })

    return res;
}