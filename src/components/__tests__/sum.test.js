import { sum } from "../sum";

test("sum of 2 numbers",()=>{

    const result=sum(2,4)

    expect(result).toBe(6);
});

