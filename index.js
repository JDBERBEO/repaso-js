//Ecmascript 6
//tipos de datos
//1 declaración de variables

/*const name = "john"
const lastname="james"

console.log('El nombre es' + name +'el apellido'+lastname)
console.log('El nombre es ${name} el apellido ${lastname}')*/

const array = [
    {
      budget: [
        {
          juan:
          {
            enero: {
              ingresos: [{ salario: 2000, regalo: 4000 }],
              gastos: [{ comida: 1000, arriendo: 10000 }]
            },
            febrero: {
              ingresos: [{ salario: 2000, regalo: 4000 }],
              gastos: [{ comida: 1000, arriendo: 10000 }]
            }
          },
          pepe:
          {
            enero: {
              ingresos: [{ salario: 2000, regalo: 4000 }],
              gastos: [{ comida: 1000, arriendo: 1000 }]
            },
            febrero: {
              ingresos: [{ salario: 2000, regalo: 4000 }],
              gastos: [{ comida: 1500, arriendo: 4000  }]
            }
          },
        }
      ]
    }]

/* Para (nombre) en el mes de (mes) sus ingresos por concepto de (categoria) fueron
(valor) y sus gastos por concepto de (categ) fueron (valor) quedando un total de (valor)
**si total excede 1000 impuesto de 10% sino 0** menos impuesto de (valor) y un neto de ()
* el calculo del impuesto debe hacerse implementando una funcion*/

for (let index = 0 ; index < array[0].budget.length; index ++) {
    for (let index_2)
    console.log(array[0.budget[index]);
}
