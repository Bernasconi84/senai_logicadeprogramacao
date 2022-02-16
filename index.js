                                                       // Por gentileza insira os valores nas variáveis para testar o código.

const idadeParticipante = 18;        // Insira a idade do participante.   
let numeroInscricoes = 100;           // Insira o número de incritos.
let diaEvento = 10;                  // Insira o dia do evento.
let mesEvento = 11;                  // Insira o mês do evento.
let anoEvento = 2021;                // Insira o ano do evento.
let diaAtual = 15;                   // Insira o dia de hoje.
let mesAtual = 2;                    // Insira o mês atual.
let anoAtual = 2022;                 // Insira o ano atual.

console.log(`Data Evento: ${diaEvento}/${mesEvento}/${anoEvento}`);                  // Para melhor compreensão printei as datas no cli node.js
console.log(`Data Atual: ${diaAtual}/${mesAtual}/${anoAtual}`)
console.log(`Número de inscrições: ${numeroInscricoes}`);
console.log(`Idade do participante: ${idadeParticipante}`);


if (diaEvento >= diaAtual && mesEvento >= mesAtual && anoEvento >= anoAtual && idadeParticipante >= 18 && numeroInscricoes < 100) {
    console.log(`Data válida: ${diaEvento}/${mesEvento}/${anoEvento}, ainda há vagas para inscrições. Participante dentro da idade permitida!`);
} else if (diaEvento < diaAtual && mesEvento > mesAtual && anoEvento >= anoAtual && idadeParticipante >= 18 && numeroInscricoes < 100) {
    console.log(`Data válida: ${diaEvento}/${mesEvento}/${anoEvento}, ainda há vagas para inscrições. Participante dentro da idade permitida! `);
} else if (diaEvento <= diaAtual && mesEvento <= mesAtual && anoEvento > anoAtual && idadeParticipante >= 18 && numeroInscricoes < 100) {
    console.log(`Data válida:${diaEvento}/${mesEvento}/${anoEvento}, ainda há vagas para inscrições. Participante dentro da idade permitida! `);
} else if (diaEvento >= diaAtual && mesEvento < mesAtual && anoEvento >= anoAtual && idadeParticipante >= 18 && numeroInscricoes < 100) {
    console.log(`Data válida: ${diaEvento}/${mesEvento}/${anoEvento}, ainda há vagas para inscrições. Participante dentro da idade permitida! `);
} else if (idadeParticipante < 18 && numeroInscricoes <= 100) {
    console.log(`Inscrição permitida apenas para maiores de 18 anos.`);
} else if (idadeParticipante >= 18 && numeroInscricoes >= 100) {
    console.log(`Quantidade máxima de inscrições se excederam, não é possível se inscrever.`)
} else if (diaEvento >= diaAtual && mesEvento >= mesAtual && anoEvento < anoAtual) {
    console.log(`Data inválida: ${diaEvento}/${mesEvento}/${anoEvento}, ano da data do evento é inferior ao ano atual.`);
} else if (diaEvento >= diaAtual && mesEvento < mesAtual && anoEvento <= anoAtual) {
    console.log(`Data inválida: ${diaEvento}/${mesEvento}/${anoEvento}, mês da data do evento é inferior ao mês atual.`);
} else if (diaEvento < diaAtual && mesEvento >= mesAtual && anoEvento <= anoAtual) {
    console.log(`Data inválida: ${diaEvento}/${mesEvento}/${anoEvento}, dia da data do evento é inferior ao dia atual.`)
} else if (diaEvento < diaAtual && mesEvento <= mesAtual && anoEvento <= anoAtual) {
    console.log(`Data inválida: ${diaEvento}/${mesEvento}/${anoEvento}, dia e mês da data do evento é inferior ao dia atual.`)
}


                                               
                                               
                                                
 