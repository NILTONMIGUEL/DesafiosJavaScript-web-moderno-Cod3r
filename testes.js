const Pessoa={
    nome:"Miguel",
    falar(){
        console.log(this.nome);
    }

}

const falando=Pessoa.falar.bind(Pessoa);
falando();