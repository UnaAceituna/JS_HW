const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

  /*3. Написать функцию, которая будет добавлять предприятие. 
  В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")

В этой задаче нужно запушить в массив новое значение-объект, 
для этого предварительно нужна функция для подсчёта id*/

const GetNewId = function(company){
    let maxId = 0
    company.forEach(comp =>{
        if(maxId < comp.id){
            maxId = comp.id
        }
        if(comp.departments){
            comp.departments.forEach(dept =>{
            if(maxId.id < dept.id){
            maxId = dept.id
        }
    }) 
} 
    })
    return maxId + 1   
}
console.log(GetNewId(enterprises))

const addEnterprise = function (name){
    enterprises.push({
        id: GetNewId(enterprises),
        name: name,
        departments: []
    })
}
addEnterprise('Testers')
console.log(enterprises)