import bst from "./bst.js";

describe("Binary Search Tree methods", () => {
    let tree;

    beforeEach(() => {
        tree = bst([1, 2, 3]);
    });

    test("root should return the resulting tree from the array", () => {
        expect(tree.root).toEqual({
            data: 2,
            left: {
                data: 1,
                left: null,
                right: null,
            },
            right: {
                data: 3,
                left: null,
                right: null,
            },
        });
    });

    test("insertNode should insert a value as a leaf node", () => {
        expect(tree.insertNode(4, tree.root)).toEqual(
            {
                data: 2,
                left: { 
                    data: 1, 
                    left: null, 
                    right: null },
                right: { 
                    data: 3, 
                    left: null, 
                    right: { 
                        data: 4, 
                        left: null, 
                        right: null } },
        });
    });
});
