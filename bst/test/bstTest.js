import { assert } from 'chai';
import { BinarySearchTree } from '../src/bst.js';  // Adjust the path as needed
describe('Create', function() {
    it('should initialize with a null root', function() {
        const bst = new BinarySearchTree();
        assert.equal(bst.root, null);
    });
});
describe('Insert', function() {


    it('should insert values correctly', function() {
        const bst = new BinarySearchTree();
        bst.insert(17);
        bst.insert(17);
        bst.insert(10);
        bst.insert(7);
        bst.insert(12);
        bst.insert(12);
        bst.insert(4);
        bst.insert(8);
        bst.insert(11);
        bst.insert(11);
        bst.insert(1);
        bst.insert(5);
        bst.insert(9);
        bst.insert(9);

        bst.insert(20);
        bst.insert(20);
        bst.insert(19);
        bst.insert(22);
        bst.insert(22);
        bst.insert(18);
        bst.insert(21);
        bst.insert(21);
        bst.insert(24);
        // Test root
        assert.equal(bst.root.value, 17);

        // Test left subtree
        assert.equal(bst.root.left.value, 10);
        assert.equal(bst.root.left.left.value, 7);
        assert.equal(bst.root.left.right.value, 12);
        assert.equal(bst.root.left.left.left.value, 4);
        assert.equal(bst.root.left.left.right.value, 8);
        assert.equal(bst.root.left.right.left.value, 11);
        assert.equal(bst.root.left.left.left.left.value, 1);
        assert.equal(bst.root.left.left.left.right.value, 5);
        assert.equal(bst.root.left.left.right.right.value, 9);

        // Test right subtree
        assert.equal(bst.root.right.value, 20);
        assert.equal(bst.root.right.left.value, 19);
        assert.equal(bst.root.right.right.value, 22);
        assert.equal(bst.root.right.right.right.value, 24);
        assert.equal(bst.root.right.left.left.value, 18);
        assert.equal(bst.root.right.right.left.value, 21);
        
    });

});
describe('Get', function() {
    it('get values', function() {
        const bst = new BinarySearchTree();
        bst.insert(17);
        bst.insert(10);
        bst.insert(7);
        bst.insert(12);
        bst.insert(4);
        bst.insert(8);
        bst.insert(11);
        bst.insert(1);
        bst.insert(5);
        bst.insert(9);
    
        bst.insert(20);
        bst.insert(19);
        bst.insert(22);
        bst.insert(18);
        bst.insert(21);
        bst.insert(24);

        assert.equal(bst.get(10), 10);
        assert.equal(bst.get(4), 4);
        assert.equal(bst.get(17), 17);
        assert.equal(bst.get(22), 22);
        assert.equal(bst.get(8), 8);
        assert.equal(bst.get(5), 5);
        assert.equal(bst.get(11), 11);
    });
});

describe ('Get all', function(){
    it('should maintain BST properties', function() {
        const bst = new BinarySearchTree();
        bst.insert(17);
        bst.insert(10);
        bst.insert(7);
        bst.insert(12);
        bst.insert(4);
        bst.insert(8);
        bst.insert(11);
        bst.insert(1);
        bst.insert(5);
        bst.insert(9);

        bst.insert(20);
        bst.insert(19);
        bst.insert(22);
        bst.insert(18);
        bst.insert(21);
        bst.insert(24);
        // Test in-order traversal to verify BST property
        assert.deepEqual(bst.getAll(), [ 1, 4, 5, 7, 8, 9, 10, 11, 12,17,18,19,20,21,22,24]);
    });
})
describe.only('Delete', function() {
    it('should delete values correctly', function() {
        const bst = new BinarySearchTree();
        bst.insert(17);
        bst.insert(10);
        bst.insert(7);
        bst.insert(12);
        bst.insert(4);
        bst.insert(8);
        bst.insert(11);
        bst.insert(1);
        bst.insert(5);
        bst.insert(9);
    
        bst.insert(20);
        bst.insert(19);
        bst.insert(22);
        bst.insert(18);
        bst.insert(21);
        bst.insert(24);
        // Test root
    
        bst.delete(9);
        bst.delete(20);
        assert.equal(bst.root.value, 17);
    
        // Test left subtree
        assert.equal(bst.root.left.value, 10);
        assert.equal(bst.root.left.left.value, 7);
        assert.equal(bst.root.left.right.value, 12);
        assert.equal(bst.root.left.left.left.value, 4);
        assert.equal(bst.root.left.left.right.value, 8);
        assert.equal(bst.root.left.right.left.value, 11);
        assert.equal(bst.root.left.left.left.left.value, 1);
        assert.equal(bst.root.left.left.left.right.value, 5);
        assert.equal(bst.root.left.left.right.right, null);
    
        // Test right subtree
        assert.equal(bst.root.right.value, 21);
        assert.equal(bst.root.right.left.value, 19);
        assert.equal(bst.root.right.right.value, 22);
        assert.equal(bst.root.right.right.right.value, 24);
        assert.equal(bst.root.right.left.left.value, 18);
        assert.equal(bst.root.right.right.left, null);

        assert.equal(bst.delete(54),'value 54 does not exist');
        
    });
    it('Delete more values', function() {
        const bst = new BinarySearchTree();
        bst.insert(17);
        bst.insert(10);
        bst.insert(7);
        bst.insert(12);
        bst.insert(4);
        bst.insert(8);
        bst.insert(11);
        bst.insert(1);
        bst.insert(5);
        bst.insert(9);
    
        bst.insert(30);
        bst.insert(39);
        bst.insert(36);
        bst.insert(37);
        bst.insert(40);
        bst.insert(33);
        bst.insert(34);
        bst.insert(29);
        bst.insert(23);
        // Test root
    
        bst.delete(9);
        bst.delete(10);
        bst.delete(7);
        bst.delete(12);
        bst.delete(36);
        bst.delete(34);
        bst.delete(29);

        bst.delete(17);

        assert.deepEqual(bst.getAll(), [ 1, 4, 5, 8, 11, 23, 30, 33, 37,39,40]);
        
    });
    it.only('Delete more values', function() {
        const bst = new BinarySearchTree();
        bst.insert(5);
        bst.insert(3);
        bst.insert(4);
        bst.insert(1);
        bst.insert(2);
        
        bst.delete(5);
        assert.equal(bst.root.value, 3);
        assert.equal(bst.root.left.value, 1);
        assert.equal(bst.root.left.right.value, 2);
        assert.equal(bst.root.right.value,4);
 
        bst.delete(3);
        assert.equal(bst.root.value, 4);
        assert.equal(bst.root.left.value, 1);
        assert.equal(bst.root.left.right.value, 2);
    });
    
});


