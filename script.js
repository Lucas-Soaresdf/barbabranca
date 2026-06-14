const menuMobile = document.getElementById('menu-mobile');
const menu = document.getElementById('menu');

menuMobile.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

const form = document.getElementById('form-agendamento');

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

    const telefone = "5583981313233"; // número do tatuador

    const url =
`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});