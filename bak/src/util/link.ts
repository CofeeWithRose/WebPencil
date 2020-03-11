export class LinkNode<T> {

	constructor( public value: T ){}
  
  key = Symbol();

  next?: LinkNode<T>

  pre?: LinkNode<T>
 
}
export class Link<T> {

  protected map = new Map<Symbol, LinkNode<T>>()

  protected start = new LinkNode(null as any)

  insert(val: T,after: Symbol){
    
  	if(!after){
  		throw 'error'
  	}
  	const node = this.map.get(after)
  	if(!node){
  		throw 'error'
  	}
  	const newNode = new LinkNode(val)
  	newNode.pre = node
  	newNode.next = node.next
  	node.next = newNode
  	if(node.next){
  		node.next.pre = newNode
  	}
  	this.map.set(newNode.key, newNode)
  }

  remove(key: Symbol){
  	const node = this.map.get(key)
  	if(node){
  		if(node.pre){
  			node.pre.next = node.next
  			this.map.delete(key)
  		}else{
  			throw 'no pre'
  		}
  	}
  }
  
  forEach(fun: (val:T, key: Symbol) => void){
  	let curN: LinkNode<T> | undefined = this.start
  	while(curN){
  		fun(curN.value, curN.key)
  		curN = curN.next
  	}
  }
}