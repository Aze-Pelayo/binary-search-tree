import mergeSort from './mergeSort'

describe("Merge Sort tests", () => {
    it("should return the same sorted array", () => {
        let array = [1,2,3,4];
        expect(mergeSort(array)).toEqual([1,2,3,4])
    })
    it("should test an array with an odd number size", () => {
        let array = [5,2,7,1,3,12,20,100,50,8,9];
        expect(mergeSort(array)).toEqual([1,2,3,5,7,8,9,12,20,50,100])
    })
    it("should test an array with an even number size", () => {
        let array = [5,2,7,1,3,12,20,100,50,8,9,22];
        expect(mergeSort(array)).toEqual([1,2,3,5,7,8,9,12,20,22,50,100])
    })
})
