function add(a:number, b:number):number{
  return a + b
}
test("A=adds 1 + 2 to equal 3", ()=>{
  expect(add(1, 2)).toBe(3)
})