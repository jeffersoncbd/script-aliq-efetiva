# ScriptAliqEfetiva
Um projeto utilizando DENO para calcular a Alíquota Efetiva de empresas do Simples Nacional

# Instalação
Baixe [aqui](https://github.com/jeffersoncbd/script-aliq-efetiva/releases/latest) de acordo com seu sistema operacional (Somente para windows no momento).

## Tabelas indexadas
- [x] Anexo I
- [ ] Anexo II
- [ ] Anexo III
- [x] Anexo IV
- [ ] Anexo V

## Recursos a serem implementados
- [x] Sleep no fim do script para que aplicativo compilado continue aberto por um tempo
- [x] Input de Receita Bruta Total (ultimos 12 meses)
  - [x] Validação de valor (rejeitar números negativos)
  - [x] Sanitização de valor mascarado (formato BRL)
- [x] Input de anexo (I, II, III, IV, V)
  - [x] Validação de valor (aceitar comente numeros romanos de 1 a 5)
  - [ ] Converter letras maiúsculas para minúsculas
- [ ] Label para resultado
