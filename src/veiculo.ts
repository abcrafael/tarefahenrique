import veiculo from 'fs';

const veiculos = [
    { tipo: 'carro', marca: 'marca1', modelo: 'modelo1', ano: 2015, valor: 100 },
    { tipo: 'carro', marca: 'marca2', modelo: 'modelo2', ano: 2016, valor: 200 },
    { tipo: 'carro', marca: 'marca3', modelo: 'modelo3', ano: 2017, valor: 300 },
    { tipo: 'moto' , marca: 'marca4', modelo: 'modelo4', ano: 2018, valor: 400 },
    { tipo: 'moto' , marca: 'marca5', modelo: 'modelo5', ano: 2019, valor: 500 }
];
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