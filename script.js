const menuMobile = document.getElementById('menu-mobile');
const menu = document.getElementById('menu');

if (menuMobile && menu) {
    menuMobile.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
}

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
