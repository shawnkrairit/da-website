export type Dept = {
    id: string
    slug: string
    nameEn: string
    nameTh: string
    nameCn: string
}

export type Attorney = {
    id: string
    slug: string
    imageUrl: string | null
    fullNameEn: string
    fullNameTh: string
    fullNameCn: string
    titleEn: string
    titleTh: string
    titleCn: string
    biographyEn: string
    biographyTh: string
    biographyCn: string
    departments: { department: Dept }[]
}
