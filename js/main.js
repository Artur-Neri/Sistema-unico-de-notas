const form = document.getElementById('novoAluno')
const limpar = document.getElementById('limpar')
const aprovados = document.getElementById('lista_aprovados')
const reprovados = document.getElementById('lista_reprovados')
const alunos = JSON.parse(localStorage.getItem('alunos')) || []

alunos.forEach( (aluno) => {
    adicionarAluno(aluno)
} )

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const nota = evento.target.elements['nota']

    const alunoAtual = {
        'nome': nome.value,
        'nota': nota.value
    }

    adicionarAluno(alunoAtual)

    alunos.push(alunoAtual)

    localStorage.setItem('alunos', JSON.stringify(alunos))

    nome.value = ''
    nota.value = ''

    nome.focus()
})

limpar.addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
})

function adicionarAluno(aluno) {
    const novoAluno = document.createElement('li')
    novoAluno.classList.add('aluno')

    const nomeAluno = document.createElement('span')
    nomeAluno.innerHTML = `${aluno.nome} | Nota: `
    nomeAluno.classList.add('nome')
    
    const notaAluno = document.createElement('span')
    notaAluno.innerHTML = aluno.nota
    notaAluno.classList.add('nota')

    novoAluno.appendChild(nomeAluno)
    novoAluno.appendChild(notaAluno)

    if (aluno.nota >= 6) {
        aprovados.appendChild(novoAluno)
    } else {
        reprovados.appendChild(novoAluno)
    }
}

function removerAluno(aluno) {
    aluno.classList
}

