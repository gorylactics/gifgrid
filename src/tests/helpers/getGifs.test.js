import {getGifts} from '../../helpers/getGifs'
describe('Prueba del helper getGifs', () => {
    
    test('debe traer 10 elementos', async() => {
        const gifs = await getGifts('morty')
        console.log(gifs)
        expect(gifs.length).toBe(10)
    })
    test('debe traer 0 elementos', async() => {
        const gifs = await getGifts([])
        console.log(gifs)
        expect(gifs.length).toBe(0)
    })
})


