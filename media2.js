const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Informe a primeira a nota: ', (N1) => {
    rl.question('Informe a segunda nota: ', (N2) => {
        rl.question('Informe a terceira nota: ', (N3) => {
            
            const nota1 = parseFloat(N1)
            const nota2 = parseFloat(N2)
            const nota3 = parseFloat(N3)

            if (!isNaN (nota3) && !isNaN (nota2) && !isNaN (nota3)){

                const calculoMedia = (nota1 + nota2 + nota3 / (3))

                if (calculoMedia >= 7) {
                    console.log('Aluno Aprovado!') 
            } 
                if (calculoMedia <= 7) {
                    console.log('Aluno reprovado!')
            }       

            } else {
                console.log('Digite somente números!!')
            }

            rl.close()
        })  
    })
})
