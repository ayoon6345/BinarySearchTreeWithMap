class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    
    constructor() {
        this.root = null; // Root of the tree, initially empty
    }
    insert(val){
        if(this.root === null){
            this.root = new Node(val);
        }else {
            return this.insertHelper(this.root, val);
        }
    }
    insertHelper(node, val){
        if(val < node.value){
            if(node.left === null){
                node.left = new Node(val);
            }
            else{
                return this.insertHelper(node.left,val);
            }
        }
        if(val > node.value){
            if(node.right === null){
                node.right = new Node(val);
            }
            else{
                return this.insertHelper(node.right,val);
            }
        }
        if(val === node.value){
            return `Value ${val} already exists in the tree.`;
        }
    }
    get(val){
        return this.getHelper(val, this.root);
    }
    getHelper(val, node){
        if(val === node.value){
            return node.value;
        }
        if(val < node.value){
            if(node.left === null){
                return `value ${val} does not exist`;
            }
            else{
                return this.getHelper(val,node.left);
            }
        }
        if(val > node.value){
            if(node.right === null){
                return `value ${val} does not exist`;
            }
            else{
                return this.getHelper(val,node.right);
            }
        }
    }
    getAll(){
        const result = [];
        this.getAllHelper(this.root, result);
        return result;
    }
    getAllHelper(node, arr) {
        if (node !== null) {
            this.getAllHelper(node.left, arr);
            arr.push(node.value);
            this.getAllHelper(node.right, arr);
        }
    }

    delete(val){
        if(this.get(val) === 'value '+val+' does not exist'){
            return 'value '+val+' does not exist';
        }

        this.deleteNode(this.root, val);

    }
    deleteNode(node, value) {
        if (node === null)
            return null;
        if (value < node.value) {
          node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
          node.right = this.deleteNode(node.right, value);
        } else {
          // Node with only one child or no child
          if (node.left === null){
            if(value === this.root.value){
                this.root = node.right;
            }
            return node.right;
          } 
          if (node.right === null){
            if(value === this.root.value){
                this.root = node.left;
            }
            return node.left;
          } 

          // Node with two children: Get the inorder successor (smallest in the right subtree)
          let temp = this.minValue(node.right);

          // Copy the inorder successor's content to this node
          node.value = temp.value;
 
          // Delete the inorder successor
          node.right = this.deleteNode(node.right, temp.value);
          if(this.root === null){
            this.root = node;
            } 
        }
        return node;
      }

    minValue(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }


}
export { BinarySearchTree };