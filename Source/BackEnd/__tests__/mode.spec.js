
const Imovel = require ("../Models/Imovel.js")
const imoveisRepositories = require ("../Repositories/imoveisRepositories.js")


describe("teste cadastro de Imoveis ", ()=>{
    test("Cadastrar um imovel", async ()=>{
        const imovel  = {
            cep: "37200172",
            logradouro: "Rua teste",
            numero: 14,
            complemento: null,
            bairro: "Centro",
            cidade: "Lavras",
            estado: "MG",
            preco: "3000000",
            modelonegocio: true,
            tipodeimovel: false};
        const retorno =  await imoveisRepositories.cadastrarImovel(imovel)
        await expect(retorno).toEqual("Imovel Cadastrado com sucesso")
    })
})


describe("Procurar imovel", ()=>{
    test("procurar um imovel que nao existe", async ()=>{
        const retorno =  await imoveisRepositories.getImovel(3)
        await expect(retorno).toBeNull()
    })
})

describe("Procurar imovel", ()=>{
    test("procurar um imovel que existe", async ()=>{
        const retorno =  await imoveisRepositories.getImovel(1)
        await expect(retorno).toBeInstanceOf(Imovel)
    })
})