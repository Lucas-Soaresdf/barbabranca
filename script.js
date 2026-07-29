//  página Trabalhos
const filtroCategorias = document.getElementById('filtro-categorias');

if (filtroCategorias) {
    const botoesFiltro = filtroCategorias.querySelectorAll('.filtro-btn');
    const itensGaleria = document.querySelectorAll('#galeria-imagens .img-item');

    botoesFiltro.forEach((botao) => {
        botao.addEventListener('click', () => {
            const categoria = botao.dataset.filtro;

            botoesFiltro.forEach((b) => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            itensGaleria.forEach((item) => {
                const mostrar = categoria === 'todas' || item.dataset.categoria === categoria;
                item.classList.toggle('escondido', !mostrar);
            });
        });
    });
}

// agendamento

const form = document.getElementById('form-agendamento');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const tamanho = document.getElementById('tamanho').value;
        const local = document.getElementById('local').value;

        const mensagem =
`Olá! Gostaria de fazer um orçamento.

Nome: ${nome}
Ideia:
${descricao}
Tamanho:
${tamanho}
Local do corpo:
${local}
Tenho uma imagem de referência para enviar.`;

        const telefone = "5583981313233";

        const url =
`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
    });
}