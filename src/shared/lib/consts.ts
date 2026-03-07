interface Links{
    name:string
    link:string
}
export const links:Links[] = [{"name":"home","link":"/"}, {"name":"dashboard","link":"/dashboard"}, {"name":"project","link":"/project"},{"name":"auth","link":"/auth"},{"name":"chat","link":"/chat"}]

interface Projects {
    id:number
    title:string
    description:string
    category:string
    money:number
    amount:number
}

export const projects:Projects[] = [
  {
    id: 1,
    title: "Angular Project",
    description: "Разработка интерфейсов на базе Angular и оптимизация скорости.",
    category: "Web Development",
    money:100,
    amount:1200
  },
  {
    id: 2,
    title: "React Dashboard",
    description: "Создание админ-панели с использованием Next.js и Tailwind CSS.",
    category: "UI/UX Design",
    money:200,
    amount:1400
  }
];