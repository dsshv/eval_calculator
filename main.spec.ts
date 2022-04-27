import {evalFunc} from "./main";

describe('tets_main', () =>{

    it('calculate test_1',()=>{
        expect(evalFunc('1')).toBe('1')
    })

    it('calculate test_2',()=>{
        expect(evalFunc('5 + (25 - 15) * 3 - (7 * 3)')).toBe('24')
    })

    it('calculate test_3',()=>{
        expect(evalFunc('(1 + 2 * 3 * 9 -21 / 6)')).toBe('10')
    })

    it('calculate test_4',()=>{
        expect(evalFunc('((3 + 3 * 4) - (9 - 21))')).toBe('36')
    })

    it('calculate test_5',()=>{
        expect(evalFunc('((((160 / 2) / 4) / 5) * 4)')).toBe('16')
    })

    it('calculate test_6',()=>{
        expect(evalFunc('asdasdas')).toBe(`String "asdasdas" contains invalid symbols`)
    })
})