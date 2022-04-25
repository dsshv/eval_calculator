import {spacesRemove} from "./main";
import {calculate} from "./main";

it('test of spacesRemove', ()=>{
    expect(spacesRemove('hgagfd fasfaw eawe   sad w ae  wawe aw d sa d asd')).toBe('hgagfdfasfaweawesadwaewaweawdsadasd')
})
it('test of spacesRemove2', ()=>{
    expect(spacesRemove('a b c')).toBe('abc')
})

it('calculate test_1',()=>{
    expect(calculate('1')).toBe('1')
})

it('calculate test_2',()=>{
    expect(calculate('5 + (25 - 15) * 3 - (7 * 3)')).toBe('24')
})

it('calculate test_3',()=>{
    expect(calculate('(1 + 2 * 3 * 9 -21 / 6)')).toBe('10')
})

it('calculate test_4',()=>{
    expect(calculate('((3 + 3 * 4) - (9 - 21))')).toBe('36')
})

it('calculate test_5',()=>{
    expect(calculate('((((160 / 2) / 4) / 5) * 4)')).toBe('16')
})