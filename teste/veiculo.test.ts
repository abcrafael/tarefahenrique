import { somarValoresPorMarca, filtrarVeiculosPorMarca, filtrarVeiculosMaisNovos} from '../src/veiculo';

test('filtrarVeiculosPorMarca de "marca1"', () => {
    const resultado = filtrarVeiculosPorMarca('carro', 'marca1');
    expect(resultado).toEqual([
        { tipo: 'carro', marca: 'marca1', modelo: 'modelo1', ano: 2015, valor: 100 }
    ]);
});
test('filtrarVeiculosMaisNovos que o ano 2018', () => {
    const resultado = filtrarVeiculosMaisNovos(2018);
    expect(resultado).toEqual([
        { tipo: 'carro', marca: 'marca1', modelo: 'modelo1', ano: 2015, valor: 100 },
        { tipo: 'carro', marca: 'marca2', modelo: 'modelo2', ano: 2016, valor: 200 },
        { tipo: 'carro', marca: 'marca3', modelo: 'modelo3', ano: 2017, valor: 300 }
    ]);
});
test('somarValoresPorMarca de marca1', () => {
    const resultado = somarValoresPorMarca('marca1');
    expect(resultado).toBe(600);
});
