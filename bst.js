import mergeSort from "./mergeSort.js";

const newNode = (value, left, right) => {
    return {
        data: value,
        left: left ? left : null,
        right: right ? right : null,
    };
};

const bst = (arr) => {
    let sortedArray = mergeSort(arr);
    let root = arr ? buildTree(sortedArray) : null;

    function getMiddleIndex(array) {
        return Math.round(array.length / 2) - 1;
    }

    function buildTree(array) {
        const middleIndex = getMiddleIndex(array);
        let leftSide = array.slice(0, middleIndex);
        let rightSide = array.slice(middleIndex + 1, array[array.length - 1]);

        if (leftSide.length === 1) {
            leftSide = newNode(leftSide[0]);
        } else if (leftSide.length === 0) {
            leftSide = null;
        } else {
            leftSide = buildTree(leftSide);
        }

        if (rightSide.length === 1) {
            rightSide = newNode(rightSide[0]);
        } else if (rightSide.length === 0) {
            rightSide = null;
        } else {
            rightSide = buildTree(rightSide);
        }

        let tree = newNode(array[middleIndex], leftSide, rightSide);

        return tree;
    }

    function insertNode(value, node) {
        if (root === null) {
            root = newNode(value)
        };
        
        if (value < node.data) {
            if (node.left === null) {
                node.left= newNode(value)
            }
            else {
                insert(value, node.left)
            }
        }

        if (value > node.data) {
            if (node.right === null) {
                node.right = newNode(value)
            }
            else {
                insert(value, node.right)
            }
        }

        return root
    }

    function deleteNode(value, node, previousNode) {
        let pointer = node;
        // case 1: leaf node
        if (value < node.data) {
            deleteNode(value, node.left, pointer)
        }
        else if (value > node.data) {
            deleteNode(value, node.right, pointer)
        }
        else {
            if (node.left === null && node.right === null) {
                if(pointer.left.value == value) {
                    pointer.left = null;
                }
                else {
                    pointer.right = null;
                }
            }
        }
        // case 2: node with 1 child

        // case 3: node with 2 childs
    }

    return {
        get root() {
            return root;
        },
        insertNode,
        deleteNode
    };
};

let tree = bst([1,2,3,10]);
tree.insert(4, tree.root)
tree.insert(2.5, tree.root)

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

prettyPrint(tree.root);

export default bst;
