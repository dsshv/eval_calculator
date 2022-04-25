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