document.querySelector('nav ul li a i.fa-bell').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('notificacaoPainel').classList.toggle('ativo');
});

function fecharNotificacoes() {
    document.getElementById('notificacaoPainel').classList.remove('ativo');
}
