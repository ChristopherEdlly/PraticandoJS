function valid() {
    if (document.cadastro.nome.value == "") {
        event.preventDefault();
        window.alert("voce deve informar seu nome");
        document.cadastro.focus();
    };
    if (document.cadastro.observacao.value == "") {
        event.preventDefault();
        window.alert("voce deve deixar alguma observação");
        document.cadastro.observacao.focus();
        return false
    }
}