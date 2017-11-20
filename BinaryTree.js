// Javascript 实现二叉树
function BinaryTree ()
{
	var Node = function (key)
	{
		this.key = key;
		this.left = null;
		this.right = null;
	}

	var root = null;

	var insertNode = function (node, newNode)
	{
		if (newNode.key < node.key)
		{
			if (node.left === null)
			{
				node.left = newNode;
			}
			else
			{
				insertNode(node.left, newNode);
			}
		}
		else
		{
			if (node.right === null)
			{
				node.right = newNode;
			}
			else
			{
				insertNode(node.right, newNode);
			}
		}
	}

	this.insert = function (key)
	{
		var newNode = new Node(key);
		if (root === null)
		{
			root = node;
		}
		else
		{
			insertNode(root, newNode);
		}
	}

	// 中序遍历
	var inOrderTraverseNode = function (node, callback)
	{
		if (node !==  null)
		{
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	}

	this.inOrderTraverse = function (callback)
	{
		inOrderTraverseNode(root, callback);
	}
}


var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach (function(key))
{
	binaryTree.insert(key);
}

var callback = function (key)
{
	console.log(key);
}

binaryTree.inOrderTraverse(callback);
