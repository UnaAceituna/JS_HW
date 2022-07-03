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


/*2. Написать функцию, которая будет принимать 1 аргумент 
(id отдела или название отдела и возвращать название 
    предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2 */

let getEnterpriseName = function (val){
    let enterprise;
    //задаём переменную, с помощью которой будем искать объект
    enterprises.forEach(ent => {
        let department
        if(ent.departments){
            department = ent.departments.find(dept => {return dept.id === val || dept.name === val})
            //Find возвратит первый найденный элемент
        }
        if (department) enterprise = ent
    })
    return enterprise ? enterprise :`Нет организации с id === ${val} или имени ${val}`
   //при возврате энтерпрайз будет тру - возвращается сам объект, если фолз - комментарий
}
console.log(getEnterpriseName(1))
