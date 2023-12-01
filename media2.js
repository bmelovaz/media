// Algoritmo nota do Aluno
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function VerificaLimiteNota(notaAluno1,notaAluno2,notaAluno3){
    if ((notaAluno1 < 0 || notaAluno1 > 10) || (notaAluno2 < 0 || notaAluno2 > 10) || (notaAluno3 < 0 || notaAluno3 > 10) ) {
        console.log('Por gentileza informar números de 0 a 10!')
        process.exit()
    }
}

rl.question('Informe a primeira a nota: ', (N1) => {
    rl.question('Informe a segunda nota: ', (N2) => {
        rl.question('Informe a terceira nota: ', (N3) => {
            
            const nota1 = parseFloat(N1)
            const nota2 = parseFloat(N2)

            const nota3 = parseFloat(N3)

            VerificaLimiteNota(nota1,nota2,nota3)

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
