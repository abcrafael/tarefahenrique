import fs from 'fs';

const data = fs.readFileSync('veiculos.json', 'utf-8');
const veiculos: Veiculo[] = JSON.parse(data);
interface Veiculo {
    tipo: string;
    marca: string;
    modelo: string;
    ano: number;
    valor: number;
}
export function filtrarVeiculosPorMarca(tipo: string, marca: string): Veiculo[] {
    return veiculos.filter(veiculo => veiculo.tipo === tipo && veiculo.marca === marca);
}
export function filtrarVeiculosMaisNovos(ano: number): Veiculo[] {
    return veiculos.filter(veiculo => veiculo.ano < ano);
}
export function somarValoresPorMarca(marca: string): number {
    return veiculos
        .filter(veiculo => veiculo.marca === marca)
        .reduce((total, veiculo) => total + veiculo.valor, 0);
}
